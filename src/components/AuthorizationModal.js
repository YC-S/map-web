import React from 'react';
import { Modal, Button } from 'antd';
import WrappedNormalLoginForm from "./LoginForm"

class AuthorizationModal extends React.Component {
    state = {
        loading: false,
    };


    handleOk = () => {
        this.setState({ loading: true });
        setTimeout(() => {
            this.props.hideLogin();
            this.setState({ loading: false });
        }, 3000);
    };

    handleCancel = () => {
        this.props.hideLogin();
    };

    render() {
        const { loading } = this.state;
        const visible = this.props.visibleLogin;
        return (
            <div>
                <Modal
                    visible={visible}
                    title="Title"
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={null}
                >
                    <div className="form-container">
                        <WrappedNormalLoginForm loadingState={loading} handleModalOk={this.handleOk}/>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default AuthorizationModal;