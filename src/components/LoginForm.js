import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { userService } from '../api/UserServices';

class LoginForm extends React.Component {
    state = {
        loading: false,
        errorMessage: null,
    }

    handleSubmit = e => {
        e.preventDefault();
        // step for verification comes inside here
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                this.setState({ loading: true });
                userService.login(values.username, values.password)
                .then(() => {
                    this.setState({ loading: false });
                    this.props.hideForm();
                    console.log('hiding login form');
                    this.props.setToMap(true);
                    }
                ) 
                .catch(error => {
                    console.log(error);
                    this.setState({ loading: false });
                    this.setState({errorMessage: error.toString()});
                });

            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        const { loading, errorMessage } = this.state;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Username"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="Password"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(<Checkbox>Remember me</Checkbox>)}
                    <a className="login-form-forgot" href="">
                        Forgot password
                    </a>
                    <p style={{color: "red"}}>{errorMessage}</p>
                    <Button type="primary" htmlType="submit" loading={loading} className="login-form-button">
                        Log in
                    </Button>
                    Or <button className="login-form-button-to-register" onClick={this.props.showRegister}>register now!</button>
                </Form.Item>
            </Form>
        );
    }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(LoginForm);

export default WrappedNormalLoginForm;