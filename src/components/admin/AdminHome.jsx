'use client'
import { useState } from "react";
import { Menu, Layout, Avatar } from "antd";
import { HomeOutlined, UserOutlined, SettingOutlined, LogoutOutlined } from "@ant-design/icons";

const { Header, Sider, Content } = Layout;

const AdminHome = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <Layout style={{ minHeight: "100vh" }}>
            {/* Sidebar */}
            <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed} theme="dark">
                <div className="flex justify-center items-center py-4">
                    <Avatar size={64} icon={<UserOutlined />} />
                </div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
                    <Menu.Item key="1" icon={<HomeOutlined />}>Dashboard</Menu.Item>
                    <Menu.Item key="2" icon={<UserOutlined />}>Users</Menu.Item>
                    <Menu.Item key="3" icon={<SettingOutlined />}>Settings</Menu.Item>
                    <Menu.Item key="4" icon={<LogoutOutlined />}>Logout</Menu.Item>
                </Menu>
            </Sider>

            {/* Main Content */}
            <Layout>
                <Header className="bg-white shadow-md px-4 flex justify-between items-center">
                    <h2 className="text-lg font-semibold">Admin Dashboard</h2>
                    <Avatar size={40} icon={<UserOutlined />} />
                </Header>
                <Content className="m-4 p-6 bg-white rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4">Welcome to the Admin Panel</h3>
                    <p>Manage users, settings, and other admin-related tasks here.</p>
                </Content>
            </Layout>
        </Layout>
    );
};

export default AdminHome;
