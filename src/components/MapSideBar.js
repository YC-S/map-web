import React from 'react';
import SideBarContent from './SideBarContent';
import SideBarTopContainer from "./SideBarTopContainer"

class MapSideBar extends React.Component {
    state = {
        collapse: false,
    }

    handleClickCollapse = () => {
        this.setState( prevState => ({collapse: !prevState.collapse}));
    }

    render() {
        const { collapse } = this.state;
        const { addPointsToPlan, data }= this.props;
        return (
            <div className="map-sidebar">
                <div className="map-sidebar-main" style={{width: collapse? "0":"400px", transition: "0.2s"}}>
                    <SideBarTopContainer />
                    <SideBarContent data={data} addPointsToPlan={addPointsToPlan}/>
                </div>
                <div>
                    <button className="map-collapse-button" onClick={this.handleClickCollapse}>{collapse?<p>&#8811;</p> : <p>&#8810;</p>}</button>
                </div>

            </div>
        );
    }
}

export default MapSideBar;