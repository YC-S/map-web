import React from 'react';
import SideBarComponent from "./SideBarComponent"

class SideBarContent extends React.Component {
    render() {
        const { addPointsToPlan, data, pointsInPlan, handleHoverSearchResult } = this.props;
        // filter the search results so the points already in plan will not show even in a new search
        const pointsInPlanIds = pointsInPlan.map(point => point.id);
        const filtered = data.filter(element => !pointsInPlanIds.includes(element.id));
        return (
            <div className={"sideBar-content"}>
                {filtered.map((element) => <SideBarComponent key={element.id} componentData={element} addPointsToPlan={addPointsToPlan} handleHoverSearchResult={handleHoverSearchResult}/>)}
            </div>

        )
    }
}

export default SideBarContent;