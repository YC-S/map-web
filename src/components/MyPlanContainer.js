import React from 'react';
import PLanItem from './PlanItem';
import Arrow from './Arrow';

class MyPlanContainer extends React.Component {

    state = {
        sourceId: null,
        targetId: null,
    }

    setSourceId = (id) => {
        this.setState({sourceId: id});
    }

    render() {
        const { pointsInPlan, deletePointsFromPlan, showRoute, routeObj, rearrangePointsInPlan } = this.props;
        const { sourceId } = this.state;
        return (
            <div className={"plan-container"}>
                
                {/*  draw the first item , then followed by arrow and item */}
                {pointsInPlan[0] ? <PLanItem setSourceId={this.setSourceId} sourceId={sourceId} 
                    rearrangePointsInPlan={rearrangePointsInPlan} data={pointsInPlan[0]} 
                    deletePointsFromPlan={deletePointsFromPlan} /> : null}
                {pointsInPlan.slice(1).map((point, ind) => (
                    <div key={ind}>
                        <div className="arrow-and-time">
                            <Arrow />
                            {showRoute && routeObj && (routeObj.routes[0].legs.length ===  pointsInPlan.length - 1) ? 
                                <div style={{textAlign: "center"}}>{Math.ceil(routeObj.routes[0].legs[ind].duration/60)} min </div> : null}
                        </div>
                        <PLanItem setSourceId={this.setSourceId} sourceId={sourceId} 
                            rearrangePointsInPlan={rearrangePointsInPlan} data={point} 
                            deletePointsFromPlan={deletePointsFromPlan}/>
                    </div>               
                ))}                
            </div>
        );
    }
}

export default MyPlanContainer;