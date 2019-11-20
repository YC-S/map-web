import React, {Component} from 'react'
import { Row, Col } from 'antd';
import TopNavBar from "./top-nav-bar"


export default class experienceHeader extends React.Component {
  render() {
    return (
      <div className="experience-header">
        <h6>YOUTUAN EXPERIENCES</h6>
        <h1>One-of-a-kind activities hosted by locals</h1>
        <section>
          <Row type="flex">
            <Col span={6} order={4}>
              Space Needle
              <br/>
              {/*<img src={spaceNeedle} />*/}
              <img src={require('../resources/images/space-needle.jpg')} height={250}/>
              <p>
                Landmark modern spire with city vistas
              </p>
            </Col>
            <Col span={6} order={3}>
              Museum of Pop Culture
              <br/>
              <img src={require('../resources/images/museum-of-pop-culture.jpg')} height={250}/>
              <p>
                Experience Music Project
              </p>
            </Col>
            <Col span={6} order={2}>
              Seattle Public Library
              <br/>
              <img src={require('../resources/images/seattle-public-library.jpeg')} height={250}/>
              <p>
                Striking, modern information repository
              </p>
            </Col>
            <Col span={6} order={1}>
              Pike Place Market
              <br/>
              <img src={require('../resources/images/pike-place-market.jpg')} height={250}/>
              <p>
                Busy eateries & lively Pike Place Market
              </p>
            </Col>
          </Row>
        </section>
      </div>
    )
  }
}