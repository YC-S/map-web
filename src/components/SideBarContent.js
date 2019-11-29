import React from 'react';
import SideBarComponent from "./SideBarComponent"

class SideBarContent extends React.Component {
    render() {
        const { addPointsToPlan, data } = this.props;
        return (
            <div>
                {data.map((element, i) => <SideBarComponent key={element.id} componentData={element} addPointsToPlan={addPointsToPlan}/>)};
            </div>

        )
    }
}

export default SideBarContent;