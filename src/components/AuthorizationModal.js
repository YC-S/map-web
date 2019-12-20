import React from 'react';
import { Modal } from 'antd';
import WrappedNormalLoginForm from "./LoginForm"
import WrappedRegistrationForm from './RegisterForm';

class AuthorizationModal extends React.Component {

    handleCancel = () => {
        this.props.hideForm();
    };

    render() {

        const visible = this.props.visibleLogin || this.props.visibleRegister;
        //debugger;
        return (
            <div>
                <Modal
                    visible={visible}
                    //title=" "
                    //onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={null}
                >
                    <div className="form-container">
                        {this.props.visibleLogin ? <WrappedNormalLoginForm hideForm={this.props.hideForm} setToMap={this.props.setToMap} showRegister={this.props.showRegister}/> : null}
                        {this.props.visibleRegister ? <WrappedRegistrationForm hideForm={this.props.hideForm} setToMap={this.props.setToMap}/> : null}
                    </div>
                </Modal>
            </div>
        );
    }
}

export default AuthorizationModal;