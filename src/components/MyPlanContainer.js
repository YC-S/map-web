import React from 'react';
import PLanItem from './PlanItem';
import Arrow from './Arrow';
import {DragDropContext} from 'react-beautiful-dnd';
import {Droppable} from 'react-beautiful-dnd';

class MyPlanContainer extends React.Component {

    state = {
        sourceId: null,
        targetId: null,
        dragging: false,
    }

    setSourceId = (id) => {
        this.setState({sourceId: id});
    }

    onDragEnd = result => {
        const {destination, source, draggableId} = result;
        // console.log('destination ind: ' + destination ? destination.index : 'null');
        // console.log('source ind: ' + source.index);
        // console.log('draggableId: ' + draggableId || 'null');
        if (!destination) {
            return;
        }
        if (destination.droppableId === source.droppableId &&
            destination.index === source.index) {
                return;
            }
        this.setState({dragging: false});
        this.props.rearrangePointsInPlan(destination.index, source.index, draggableId);
    }

    onDragStart = () => {
        this.setState({dragging: true})
    }

    render() {
        const { pointsInPlan, deletePointsFromPlan, showRoute, routeObj, rearrangePointsInPlan } = this.props;
        const { dragging } = this.state;
        return (
            <DragDropContext onDragEnd={this.onDragEnd} onDragStart={this.onDragStart}>
            <div className={"plan-container"}>
            <Droppable droppableId={"drop_area_1"}>
                {provided => (
                    <div
                        ref={provided.innerRef} 
                        {...provided.droppableProps}
                        {...provided.droppablePlaceholder}
                    >
                       {pointsInPlan.map((point, ind) => 
                            <div key={point.id}>
                                {ind === 0 || !showRoute ? null : <div className="arrow-and-time">
                                    <Arrow />
                                    {showRoute && routeObj && (routeObj.routes[0].legs.length ===  pointsInPlan.length - 1) ? 
                                    <div style={{textAlign: "center"}}>{Math.ceil(routeObj.routes[0].legs[ind-1].duration/60)} min </div> : null}
                                </div> }
                                <PLanItem index={ind} data={point} deletePointsFromPlan={deletePointsFromPlan}/>
                             </div>              
                        )} 
                        {provided.placeholder} 
                    </div>
                )}
                {/*  draw the first item , then followed by arrow and item */}
                
                
            </Droppable>              
            </div>
            </DragDropContext>
        );
    }
}

export default MyPlanContainer;