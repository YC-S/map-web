import React from 'react';
import PLanItem from './PlanItem';
import Arrow from './Arrow';
import {DragDropContext} from 'react-beautiful-dnd';
import {Droppable} from 'react-beautiful-dnd';
import { Button } from 'antd';


class MyPlanContainer extends React.Component {

    state = {
        sourceId: null,
        targetId: null,
        dragging: false,
        editing: false
    }

    setSourceId = (id) => {
        this.setState({sourceId: id});
    }

    onDragEnd = result => {
        const {destination, source, draggableId} = result;
        // console.log('destination ind: ' + destination ? destination.index : 'null');
        // console.log('source ind: ' + source.index);
        // console.log('draggableId: ' + draggableId || 'null');
        this.setState({dragging: false})
        if (!destination) {
            return;
        }
        if (destination.droppableId === source.droppableId &&
            destination.index === source.index) {
                return;
            }
        this.props.rearrangePointsInPlan(destination.index, source.index, draggableId);
    }

    // onDragStart = () => {
    //     this.setState({dragging: true})
    // }

    setDragging = (isDragging) => {
        this.setState({dragging: isDragging});
    }

    handleClickEdit = () => {
        this.setState({editing: true});
        this.props.handleDisableRoute();
    }

    handleClickSavePlan = () => {
        this.setState({editing: false});
        this.props.handleEnableRoute();
    }
    render() {
        const { pointsInPlan, deletePointsFromPlan, showRoute, routeObj } = this.props;
        const { dragging, editing } = this.state;
        return (
        <DragDropContext onDragEnd={this.onDragEnd} onDragStart={this.onDragStart}>
            <div className={"plan-container"} >
                <Droppable droppableId={"drop_area_1"}>
                {provided => (
                    <div
                        ref={provided.innerRef} 
                        {...provided.droppableProps}
                        {...provided.droppablePlaceholder}
                    >
                       {pointsInPlan.map((point, ind) => 
                            <div key={point.id}>
                                {ind === 0 || !showRoute || dragging ? null : <div className="arrow-and-time">
                                    <Arrow />
                                    {showRoute && routeObj && (routeObj.routes[0].legs.length ===  pointsInPlan.length - 1) ? 
                                    <div style={{textAlign: "center"}}>{Math.ceil(routeObj.routes[0].legs[ind-1].duration/60)} min </div> : null}
                                </div> }
                                <PLanItem editing={editing} setDragging={this.setDragging} index={ind} data={point} deletePointsFromPlan={deletePointsFromPlan}/>
                             </div>              
                        )}      
                        {provided.placeholder} 
                    </div>
                )}            
                </Droppable> 
                {pointsInPlan.length > 0 ? 
                (<div>
                    {editing ? null : <Button id="plan_edit_button" type="primary" onClick={this.handleClickEdit}>Edit</Button>}
                    {editing ? <Button id="plan_save_button" type="danger" onClick={this.handleClickSavePlan}>Save Changes</Button> : null}
                </div>) : null}           
            </div>
         </DragDropContext>
        );
    }
}

export default MyPlanContainer;