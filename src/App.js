
import './App.css';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import {Breadcrumb, Button, Col, Layout, Menu, Row, Modal} from 'antd';
import React from 'react';
import 'antd/dist/antd.css'
import {Route, Routes, useNavigate} from "react-router-dom";
import { useState } from 'react';
import AuthModal from "./Components/Auth/AuthModal";

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
                        }
                    ]} />
                </Col>
                <Col lg={3}>
                    <div className="div-inputs">
                        {
                            <AuthModal />
                        }
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
                        <Route exact path={'test'} element={<div>56566</div>}/>
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
