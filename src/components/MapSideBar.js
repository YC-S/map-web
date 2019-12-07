import React from 'react';
import SideBarContent from './SideBarContent';
import SideBarTopContainer from "./SideBarTopContainer"
import { Tabs } from 'antd';
import MyPlanContainer from './MyPlanContainer';

const { TabPane } = Tabs;

class MapSideBar extends React.Component {
    state = {
        collapse: false,
    }

    handleClickCollapse = () => {
        this.setState( prevState => ({collapse: !prevState.collapse}));
    }

    callback = (key) => {
        console.log(key);
      }

    render() {
        const { collapse } = this.state;
        const { addPointsToPlan, data, pointsInPlan, handleHoverSearchResult, deletePointsFromPlan }= this.props;
        return (
            <div className={"mapSidebar"}>
                <div className="tab-content" style={{width: collapse? "0":"400px", padding: collapse? "0":"10px",  transition: "0.2s"}}>
                <Tabs defaultActiveKey="1" onChange={this.callback} tabBarStyle={{textAlign: "center"}}>
                    <TabPane tab="&emsp;Discovery&emsp;" key="1">
                        <div className="map-sidebar-main" >
                            <SideBarTopContainer />
                            <SideBarContent data={data} addPointsToPlan={addPointsToPlan} pointsInPlan={pointsInPlan} handleHoverSearchResult={handleHoverSearchResult}/>
                        </div>
                    </TabPane>
                    <TabPane tab="&emsp;&emsp;My Plan&emsp;&emsp;" key="2">
                        <div className="map-sidebar-main" >
                            <MyPlanContainer pointsInPlan={pointsInPlan} deletePointsFromPlan={deletePointsFromPlan}/>
                        </div>
                    </TabPane>
                </Tabs>
                </div>
                
                <div>
                    <button className="map-collapse-button" onClick={this.handleClickCollapse}>{collapse?<p>&#8811;</p> : <p>&#8810;</p>}</button>
                </div>

            </div>
        );
    }
}

export default MapSideBar;