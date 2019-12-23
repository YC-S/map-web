import React, { Component } from "react";
import { List, Avatar } from 'antd';

export class PlanView extends Component {
  state = {
    //image list consist of all image user uploaded, will change once database is ready
    planList: [
      {
        planId: 0,
        planTitle: 'One day in Seattle',
        city: 'Seattle',
        pointsInPlan: [{
          lon: -122.335167,
          lat: 47.608013
        }]
      },
      {
        planId: 1,
        planTitle: 'Spring break at Chicago',
        city: 'Chicago',
        pointsInPlan: [{
          lon: -87.623177,
          lat: 41.881832
        }]
      },
      {
        planId: 2,
        planTitle: 'A trip to San Francisco',
        city: 'San Francisco',
        pointsInPlan: [{
          lon: -122.446747,
          lat: 37.733795
        }]
      }
    ]
  };
  

render() {
    return(
      <div className='plan-tab'>
        <List
          itemLayout="horizontal"
          dataSource={this.state.planList}
          renderItem={item => (
              <List.Item>
                  <List.Item.Meta
                      //{/* avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />} */}
                      title={<a href={`/map?lng=${item.pointsInPlan[0].lon}&lat=${item.pointsInPlan[0].lat}&plan=${item.planId}`}>{item.planTitle}</a>}
                      description={'City: '+item.city}
                  />
              </List.Item>
          )}
        />
        </div>

    );
}
}
