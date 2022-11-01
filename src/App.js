
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
import {AgeCategoryNatues} from "./Components/AgeCategoryNatures/AgeCategoryNatues";
import {AgeCategoryNatue} from "./Components/AgeCategoryNatures/AgeCategoryNature";
import {SinglCategories} from "./Components/SinglCategories/SinglCategories";
import {MatchEventNatures} from "./Components/MatchEventNatures/MatchEventNatures";
import {CreateMatchEventNatures} from "./Components/MatchEventNatures/CreateMatchEventNatures";
import {ApdateMatchEventNatures} from "./Components/MatchEventNatures/ApdateMatchEventNatures";
import {Location} from "./Components/Location/Location";
import {GateType} from "./Components/GateType/GateType";
import {CreateAndUpdateGateType, CreateGateType} from "./Components/GateType/CreateAndUpdateGateType";
import {Locat} from "./Components/Location/Locat";


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
                        <Route exact path={'age-categories/new'} element={<AgeCategoryNatue />} />
                        <Route exact path={'age-categories'} element={<AgeCategoryNatues />} />
                        <Route exact path={'age-categories/:id'} element={<SinglCategories/>} />
                        <Route exact path={'match-event-natures/new'} element={<CreateMatchEventNatures />} />
                        <Route exact path={'match-event-natures'} element={<MatchEventNatures />} />
                        <Route exact path={'match-event-natures/:id'} element={<ApdateMatchEventNatures />} />
                        <Route exact path={'location'} element={<Location />} />
                        <Route exact path={'location/new'} element={<Locat />} />
                        <Route exact path={'location/:id'} element={<Locat />} />
                        <Route exact path={'gate-type'} element={<GateType />} />
                        <Route exact path={'gate-type/new'} element={<CreateAndUpdateGateType />} />
                        <Route exact path={'gate-type/:id'} element={<CreateAndUpdateGateType />} />

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
