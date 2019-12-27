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

    render() {
        const { collapse } = this.state;
        const { addPointsToPlan, data, pointsInPlan, handleHoverSearchResult, deletePointsFromPlan, rearrangePointsInPlan, showRoute, routeObj, handleDisableRoute, handleEnableRoute, planId, planTitle, plan, setPlanTitle, showLogin, popConfirmDisabled, disablePopConfirm, handleSearchPlace, setPlanId, setPlan, setPlaceCardData}= this.props;
        return (
            <div className={"mapSidebar"}>
                <div className="tab-content" style={{width: collapse? "0":"400px", padding: collapse? "0":"10px",  transition: "0.2s"}}>
                <Tabs defaultActiveKey="1" tabBarStyle={{textAlign: "center"}}>
                    <TabPane tab="&emsp;Discovery&emsp;" key="1">
                        <div className="map-sidebar-main" >
                            <SideBarTopContainer handleSearchPlace={handleSearchPlace}/>
                            <SideBarContent data={data} addPointsToPlan={addPointsToPlan} pointsInPlan={pointsInPlan} handleHoverSearchResult={handleHoverSearchResult} popConfirmDisabled={popConfirmDisabled} disablePopConfirm={disablePopConfirm} setPlaceCardData={setPlaceCardData}/>
                        </div>
                    </TabPane>
                    <TabPane tab="&emsp;&emsp;My Plan&emsp;&emsp;" key="2">
                        <div className="map-sidebar-main" >
                            <MyPlanContainer pointsInPlan={pointsInPlan} addPointsToPlan={addPointsToPlan} deletePointsFromPlan={deletePointsFromPlan} rearrangePointsInPlan={rearrangePointsInPlan} showRoute={showRoute} routeObj={routeObj} handleDisableRoute={handleDisableRoute} handleEnableRoute={handleEnableRoute} planId={planId} planTitle={planTitle} plan={plan} setPlanTitle={setPlanTitle} showLogin={showLogin} setPlanId={setPlanId} setPlan={setPlan}/>
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