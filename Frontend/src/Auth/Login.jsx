import { Alert, Spin, Button, Card, Form, Input, Typography } from 'antd';
import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import loginImage from '../assets/loginImage.avif';
import useLogin from '../hooks/useLogin';
import { useAuth } from '../contexts/AuthContext';

const Login = () => {
    const { error, loading, loginUser, isAuthenticated } = useLogin();
    const { isAuthenticated: authState } = useAuth();

    const handleLogin = async (values) => {
        await loginUser(values);
    };

    if (isAuthenticated || authState) {
        return <Navigate to="/dashboard" />;
    }

    return (
        <Card className="form-container">
            <div style={{ display: 'flex', gap: 'large', alignItems: 'center' }}>
                <div style={{ flex: 1 }}>
                    <img src={loginImage} className="auth-image" alt="Login" />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <Typography.Title level={3} strong className="title">
                        Sign In
                    </Typography.Title>
                    <Typography.Text type="secondary" strong className="slogan">
                        Unlock your world.
                    </Typography.Text>
                    <Form layout="vertical" onFinish={handleLogin} autoComplete="off">
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
                        {error && <Alert description={error} type="error" showIcon closable className="alert" />}
                        <Form.Item>
                            <Button type={`${loading ? '' : 'primary'}`} htmlType="submit" size="large" className="btn">
                                {loading ? <Spin /> : 'Sign In'}
                            </Button>
                        </Form.Item>
                        <Form.Item>
                            <Link to="/register">
                                <Button size="large" className="btn">Create Account</Button>
                            </Link>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </Card>
    );
};

export default Login;
