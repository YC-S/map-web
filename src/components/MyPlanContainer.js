import React from 'react';
import PLanItem from './PlanItem';
import Arrow from './Arrow';

class MyPlanContainer extends React.Component {

    state = {
        sourceId: null,
        targetId: null,
    }

    handleOnDragStart = (id) => {
        this.setState({sourceId: id});
    }

    dragOver = (e) => {
        e.preventDefault();
        let { sourceId } = this.state;
        const { rearrangePointsInPlan } = this.props;
        let target = e.target;
        while (target.id === "") {
            target = target.parentElement;
        }
        const targetId = target.id;
        
        rearrangePointsInPlan(sourceId, targetId);
    }

    render() {
        const { pointsInPlan, deletePointsFromPlan, showRoute, routeObj } = this.props;
        return (
            <div className={"plan-container"}>
                
                {/*  draw the first item , then followed by arrow and item */}
                {pointsInPlan[0] ? <PLanItem dragOver={this.dragOver} data={pointsInPlan[0]} deletePointsFromPlan={deletePointsFromPlan} handleOnDragStart={this.handleOnDragStart} key={pointsInPlan[0].id}/> : null}
                {pointsInPlan.slice(1).map((point, ind) => (
                    <div key={ind}>
                        <div className="arrow-and-time">
                            <Arrow />
                            {showRoute && routeObj && (routeObj.routes[0].legs.length ===  pointsInPlan.length - 1) ? <div style={{textAlign: "center"}} draggable="true">{Math.ceil(routeObj.routes[0].legs[ind].duration/60)} min </div> : null}
                        </div>
                        {console.log(pointsInPlan)}
                        <PLanItem dragOver={this.dragOver} data={point} deletePointsFromPlan={deletePointsFromPlan} handleOnDragStart={this.handleOnDragStart} key={point.id}/>
                    </div>               
                ))}                
            </div>
        );
    }
}

export default MyPlanContainer;