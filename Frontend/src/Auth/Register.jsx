import { Alert, Spin, Button, Card, Form, Input, Typography } from 'antd';
import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import registerImage from '../assets/register.jpg';
import useSignup from '../hooks/useSignup';
import { useAuth } from '../contexts/AuthContext';

const Register = () => {
    const { loading, error, registerUser, isAuthenticated } = useSignup();
    const { isAuthenticated: authState } = useAuth();

    const handleRegister = (values) => {
        registerUser(values);
    };

    if (isAuthenticated || authState) {
        return <Navigate to="/dashboard" />;
    }

    return (
        <Card className="form-container">
            <div style={{ display: 'flex', gap: 'large', alignItems: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <Typography.Title level={3} strong className="title">
                        Create an account
                    </Typography.Title>
                    <Typography.Text type="secondary" strong className="slogan">
                        Join for exclusive access!
                    </Typography.Text>
                    <Form layout="vertical" onFinish={handleRegister} autoComplete="off">
                        <Form.Item
                            label="Full Name"
                            name="name"
                            rules={[{ required: true, message: 'Please input your full name!' }]}
                        >
                            <Input size="large" placeholder="Enter your full name" />
                        </Form.Item>
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[
                                { required: true, message: 'Please input your email!' },
                                { type: 'email', message: 'The input is not valid Email' }
                            ]}
                        >
                            <Input size="large" placeholder="Enter your email" />
                        </Form.Item>
                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Please input your Password!' }]}
                        >
                            <Input.Password size="large" placeholder="Enter your Password" />
                        </Form.Item>
                        <Form.Item
                            label="Confirm Password"
                            name="passwordConfirm"
                            rules={[{ required: true, message: 'Please input your Confirm Password!' }]}
                        >
                            <Input.Password size="large" placeholder="Re-Enter your Password" />
                        </Form.Item>
                        {error && <Alert description={error} type="error" showIcon closable className="alert" />}
                        <Form.Item>
                            <Button type={`${loading ? '' : 'primary'}`} htmlType="submit" size="large" className="btn">
                                {loading ? <Spin /> : 'Create Account'}
                            </Button>
                        </Form.Item>
                        <Form.Item>
                            <Link to="/login">
                                <Button size="large" className="btn">Sign In</Button>
                            </Link>
                        </Form.Item>
                    </Form>
                </div>
                <div style={{ flex: 1 }}>
                    <img src={registerImage} className="auth-image" alt="Register" />
                </div>
            </div>
        </Card>
    );
};

export default Register;
