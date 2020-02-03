import React from "react";
import "antd/dist/antd.css";
import { ProfileService } from '../api/ProfileServices';
import { Modal, Form, Input, Button, Upload, Icon } from 'antd';

export class SettingProfile extends React.Component {
  state = {
    visible: false,
    loading: false,
  }

  handleCancel = () => {
    this.setState({ visible: false });
  };

  handleShowForm = () => {
    this.setState({ visible: true });
  }

  saveFormRef = formRef => {
    this.formRef = formRef;
  };

  handleUpdateProfile = () => {
    this.setState({loading: true});
    const { form } = this.formRef.props;
    form.validateFields((err, values) => {
        if (err) {
            return;
        }
        console.log('Received values of form: ', values);
        // save profile and reload page to update profile fields
        ProfileService.updateProfile(values.firstName, values.lastName, values.signature, values.profileImg[0].originFileObj, this.props.passedDown.profile)
        .then(profile => {
          // if no error but profile return empty then refetch profile
          if (profile === "" || profile.id === "" || profile.id === " ") {
            const user = JSON.parse(localStorage.getItem("user"));
            console.log("profile is empty");
            return ProfileService.getProfile(user.cores_profile.id)
          } else {
            console.log("profile is not empty");
            return profile;
          }
        })
        .then(profile => {
          console.log("Profile updated to" + JSON.stringify(profile));
          // update profile information in localStorage user
          const user = JSON.parse(localStorage.getItem("user"));
          user.cores_profile = profile;
          localStorage.setItem("user", JSON.stringify(user));
          // still need to figure out how to make sure everything is ready on the backend
          setTimeout(() => {
            form.resetFields();
            this.setState({ visible: false });
            this.setState({loading: false});
            window.location.reload();
          }, 0);
        })
        .catch(err => console.log(err))
    });
}
  render() {
    return (
      <div>
        <div id="nameAndEditProfile">
          <span id="person-name">{this.props.passedDown.name}</span>
          <Button className="edit-profile" onClick={this.handleShowForm}>
            Edit Profile 
          </Button>
        </div>
        <ProfileSettingModal wrappedComponentRef={this.saveFormRef} visible={this.state.visible} loading={this.state.loading} onCancel={this.handleCancel} onSubmit={this.handleUpdateProfile}/>
      </div>
    );
  }
}


const ProfileSettingModal = Form.create({ name: 'form_in_modal' })(
  class extends React.Component {
    normFile = e => {
      console.log('Upload event:', e);
      if (Array.isArray(e)) {
        return e;
      }
      if (e.fileList.length > 1) {
        e.fileList.shift();
      }
      return e && e.fileList;
    };
    dummyRequest = ({ file, onSuccess }) => {
      setTimeout(() => {
        onSuccess("ok");
      }, 0);
    }
    render() {
      const { visible, onCancel, onSubmit, form, loading } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Modal
          visible={visible}
          title="Update Profile"
          okText="Update"
          onCancel={onCancel}
          onOk={onSubmit}
          confirmLoading={loading}
        >
          <Form layout="vertical">
            <Form.Item label="First Name">
              {getFieldDecorator('firstName', {
                rules: [{ required: true, message: 'Please input your name!' }],
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Last Name">
              {getFieldDecorator('lastName', {
                rules: [{ required: false }],
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Signature">
              {getFieldDecorator('signature', {
                rules: [{ required: false }],
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Profile Image">
          {getFieldDecorator('profileImg', {
            valuePropName: 'fileList',
            getValueFromEvent: this.normFile,
            rules: [{ required: true, message: 'Please upload your profile!' }],
          })(
            <Upload.Dragger name="files" customRequest={this.dummyRequest}>
              <p className="ant-upload-drag-icon">
                <Icon type="inbox" />
              </p>
              <p className="ant-upload-text">Click or drag file to this area to upload</p>
            </Upload.Dragger>,
          )}
        </Form.Item>
          </Form>
        </Modal>
      );
    }
  },
);