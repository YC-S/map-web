import React from 'react';
import TopNavBar from "./TopNavBar";
import FriendSideBar from "./FriendSideBar";
import FriendsRecommand from "./FriendsRecommand";
import { Row, Col } from 'antd';


class FriendsPage extends React.Component {
    render() {
        return (
            <div className="friends-page">
                <div className="nav-bar-other">
                    <TopNavBar />
                </div>
                <div className="friend-sidebar">
                    <Row>
                        <Col span={4}>
                            <FriendSideBar/>
                        </Col>
                        <Col span={20}>
                            <FriendsRecommand/>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default FriendsPage;
