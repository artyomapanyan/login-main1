
import './App.css';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import {Breadcrumb, Col, Layout, Menu, Row} from 'antd';
import React from 'react';
import 'antd/dist/antd.css'
import {Route, Routes, useNavigate} from "react-router-dom";
import {LoggedId} from './Functions'
import AuthModal from "./Components/Auth/AuthModal";
import {LoginPage} from "./Components/LoginPage/LoginPage";
import {LogOut} from "./Components/LogOut/LogOut.js";
import {Users} from "./Components/Users/Users.js";
import RoutePermission from "./Components/Fragments/RoutePermission";
import {Messages} from "./Components/LoginPage/Messages";


const { Header, Content, Footer, Sider } = Layout;


const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
    const key = String(index + 1);
    return {
        key: `sub${key}`,
        icon: React.createElement(icon),
        label: `subnav ${key}`,
        children: new Array(4).fill(null).map((_, j) => {
            const subKey = index * 4 + j + 1;
            return {
                key: subKey,
                label: `option${subKey}`,
            };
        }),
    };
});


function App() {

    const navigate = useNavigate()

    return <Layout>
        <Header className="header">
            <Row>
                <Col lg={21}>
                    <div className="logo" />
                    <Menu theme="dark" mode="horizontal" onClick={e=>navigate(e.key)} defaultSelectedKeys={['2']} inlineIndent={<div>121</div>} items={[
                        {
                            key:'/test',
                            label:'Test page'
                        },
                        {
                            key:'/users',
                            label:'Users'
                        }
                    ]} />

                </Col>
                <Col lg={3}>
                    <div className="div-inputs">
                        {!LoggedId()?<AuthModal />: <LogOut />}

                    </div>

                </Col>

            </Row>


        </Header>
        <Content
            style={{
                padding: '0 50px',
            }}
        >
            <Breadcrumb
                style={{
                    margin: '16px 0',
                }}
            >
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Layout
                className="site-layout-background"
                style={{
                    padding: '24px 0',
                }}
            >
                <Sider className="site-layout-background" width={200}>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{
                            height: '100%',
                        }}
                        items={items2}
                    />
                </Sider>
                <Content
                    style={{
                        padding: '0 24px',
                        minHeight: 280,
                    }}
                >
                    <Routes>
                        <Route exact path={'test'} element={<RoutePermission checkAuth={true}><LoginPage /></RoutePermission>} />
                        <Route exact path={'users'} element={<Users />} />
                        <Route exact path={'users/:id'} element={<LoginPage />} />
                        <Route exact path={'messages/:id'} element={<Messages />} />
                    </Routes>

                </Content>
            </Layout>
        </Content>
        <Footer
            style={{
                textAlign: 'center',
            }}
        >
            Ant Design ©2018 Created by Ant UED
        </Footer>
    </Layout>

}

export default App;
