import React from "react";
import "antd/dist/antd.css";
import { Modal, Button, Input } from "antd";

export class SettingProfile extends React.Component {
  render() {
    const { visible, loading } = this.props.passedDown;
    return (
      <div>
        <div id="nameAndEditProfile">
          <span id="person-name">{this.props.passedDown.name}</span>
          <Button className="edit-profile" onClick={this.props.showModal}>
            Edit Profile <i className="fa fa-cog"></i>
          </Button>
        </div>
        <Modal
          visible={visible}
          title="Update Profile"
          onOk={this.props.handleOk}
          onCancel={this.props.handleCancel}
          footer={[
            <Button key="back" onClick={this.props.handleCancel}>
              Return
            </Button>,
            <Button
              key="submit"
              type="primary"
              loading={loading}
              onClick={this.props.handleOk}
            >
              Submit
            </Button>
          ]}
        >
          <div className="modalContainer">
            <Input
              id="inputUserName"
              placeholder="First name"
            />
            <Input
              id="inputUserName"
              placeholder="Last name"
            />
            <Input
              id="inputSignature"
              placeholder="Signature"
              maxLength={274}
            />
          </div>
        </Modal>
      </div>
    );
  }
}
