import React from 'react';
import PLanItem from './PlanItem';
import Arrow from './Arrow';

class MyPlanContainer extends React.Component {
    render() {
        const { pointsInPlan } = this.props;
        return (
            <div className={"plan-container"}>
                
                {/*  draw the first item , then followed by arrow and item */}
                {pointsInPlan[0] ? <PLanItem data={pointsInPlan[0]} /> : null}
                {pointsInPlan.slice(1).map(point => (
                    <div key={point.id}>
                        <div className="arrow-and-time">
                            <Arrow />
                            <div style={{textAlign: "center"}}>20min</div>
                        </div>
                        <PLanItem data={point}/>
                    </div>               
                ))}                
            </div>
        );
    }
}

export default MyPlanContainer;