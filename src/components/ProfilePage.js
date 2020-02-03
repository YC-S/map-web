import React from "react";
import { Header } from "./Header";
import { Profile } from "./Profile";
import { Images } from "./ProfileImageTab";
import { PlanView } from "./ProfilePlanTab";
import { TempPlace } from "./ProfileTempTab";
import TopNavBar from "./TopNavBar"

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
            pointsInPlan: [(-122.335167, 47.608013)]
          },
          {
            planId: 1,
            planTitle: 'Spring break at Chicago',
            city: 'Chicago',
            pointsInPlan: [(-87.623177, 41.881832)]
          },
          {
            planId: 2,
            planTitle: 'A trip to San Francisco',
            city: 'San Francisco',
            pointsInPlan: [(-122.446747, 37.733795)]
          }
        ]
      };
      
      render() {
          return(
            <div className='tabs-container'>
              <TopNavBar landing={false}/>
              <Profile numberOfImages={this.state.imageList.length} />

              <Tabs defaultActiveKey="1">
                <TabPane tab="Images" key="1">
                  <Images imageList={this.state.imageList} />
                </TabPane>
                <TabPane tab="Plans" key="2">
                  <PlanView planList={this.state.planList} />
                </TabPane>
                <TabPane tab="Friends" key="3">
                    Friend list comes here...
                </TabPane>
              </Tabs>
          </div>
        );
    }
  }

export default ProfilePage;
