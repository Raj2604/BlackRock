import React from 'react';
import { Avatar, Button, Card, Typography } from 'antd';
import { useAuth } from '../contexts/AuthContext';
import { UserOutlined } from '@ant-design/icons';

const Dashboard = () => {
    const { userData, logout } = useAuth();

    const handleLogout = async () => {
        await logout();
    };

    if (!userData) {
        return <div>Loading...</div>;
    }

    return (
        <Card className="profile-card">
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
                <Avatar size={150} icon={<UserOutlined />} className="avatar" />
                <Typography.Title level={2} strong className="username">
                    Welcome {userData.name} !!
                </Typography.Title>
                <Typography.Text type="secondary" strong>
                    Email: {userData.email}
                </Typography.Text>
                <Typography.Text type="secondary">
                    Role: {userData.role}
                </Typography.Text>
                <Button size="large" type="primary" className="profile-btn" onClick={handleLogout}>
                    Logout
                </Button>
            </div>
        </Card>
    );
};

export default Dashboard;
