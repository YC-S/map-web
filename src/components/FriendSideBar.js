import { Menu, Icon } from 'antd';
import React from 'react';

const { SubMenu } = Menu;

class FriendSideBar extends React.Component {
    handleClick = e => {
        console.log('click ', e);
    };

    render() {
        return (
            <Menu
                onClick={this.handleClick}
                style={{ width: 256 }}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                className="menu-style"
            >
                <SubMenu
                    key="sub1"
                    title={
                        <span>
                            <span><strong>Manage My Network</strong></span>
                        </span>
                    }
                >
                    <Menu.Item key="1"><Icon type="team" /> Connections</Menu.Item>
                    <Menu.Item key="2"><Icon type="contacts" /> Contacts</Menu.Item>
                    <Menu.Item key="3"><Icon type="smile" /> People I Follow</Menu.Item>
                    <Menu.Item key="4"><Icon type="solution" /> Groups</Menu.Item>
                    <Menu.Item key="5"><Icon type="file" /> Pages</Menu.Item>
                    <Menu.Item key="6"><Icon type="tags" /> Hashtags</Menu.Item>
                </SubMenu>
            </Menu>
        );
    }
}

export default FriendSideBar;