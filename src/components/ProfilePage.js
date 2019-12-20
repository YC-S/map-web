import React from "react";
import { Header } from "./Header";
import { Profile } from "./Profile";
import { Images } from "./ProfileImageTab";
import { PlanView } from "./ProfilePlanTab";
import { TempPlace } from "./ProfileTempTab";

import { Tabs } from 'antd';

const { TabPane } = Tabs;
// import "../styles/Profile.css";

//profile page
class ProfilePage extends React.Component {
  state = {
        //image list consist of all image user uploaded, will change once database is ready

        imageList: [
          require("../images/1.jpg"),
          require("../images/2.jpg"),
          require("../images/3.jpg"),
          require("../images/4.jpg"),
          require("../images/5.jpg"),
          require("../images/6.jpg")
        ],
        planList: [
          {
            planId: 0,
            planTitle: 'One day in Seattle',
            city: 'Seattle',
            pointsInPlan: []
          }
        ]
      };
      
      render() {
          return(
            <div className='tabs-container'>
              <Header />
              <Profile numberOfImages={this.state.imageList.length} />

              <Tabs defaultActiveKey="1">
                <TabPane tab="Images" key="1">
                  <Images imageList={this.state.imageList} />
                </TabPane>
                <TabPane tab="Plans" key="2">
                  {/* <PlanView POIList={this.state.POIList} /> */}
                </TabPane>
                <TabPane tab="Temp" key="3">
                    content of a temp tab
                </TabPane>
              </Tabs>
          </div>
        );
    }
  }

export default ProfilePage;
