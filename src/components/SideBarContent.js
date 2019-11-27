import React from 'react';
import SideBarComponent from "./SideBarComponent"

class SideBarContent extends React.Component {
    render() {
        const data = this.props.data;
        return (
            <div>
                {data.map((element, i) => <SideBarComponent key={i} componentData={element} />)};
            </div>

        )
    }
}

export default SideBarContent;