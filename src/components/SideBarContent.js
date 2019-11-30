import React from 'react';
import SideBarComponent from "./SideBarComponent"

class SideBarContent extends React.Component {
    render() {
        const { addPointsToPlan, data, pointsInPlan } = this.props;
        const pointsInPlanIds = pointsInPlan.map(point => point.id);
        const filtered = data.filter(element => !pointsInPlanIds.includes(element.id));
        return (
            <div className={"sideBar-content"}>
                {filtered.map((element) => <SideBarComponent key={element.id} componentData={element} addPointsToPlan={addPointsToPlan}/>)}
            </div>

        )
    }
}

export default SideBarContent;