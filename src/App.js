
import './App.css';

import {Breadcrumb, Col, Layout, Menu, Row} from 'antd';
import React, {useState} from 'react';
import 'antd/dist/antd.css'
import { Route, Routes, useNavigate} from "react-router-dom";
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
import {CreateAndUpdateGateType} from "./Components/GateType/CreateAndUpdateGateType";
import {Locat} from "./Components/Location/Locat";
import {TeamOfficialRole} from "./Components/TeamOfficialRole/TeamOfficialRole";
import {CreateAndUpdateTeamOfficialRole} from "./Components/TeamOfficialRole/CreateAndUpdateTeamOfficialRole";
import {NationalFacilities} from "./Components/NationalFacilities/NationalFacilities";
import {CreateAndUpdateNationalFacilities} from "./Components/NationalFacilities/CreateAndUpdateNationalFacilities";
import {RoadExpenseCalculator} from "./Components/RoadExpenseCalculator/RoadExpenseCalculator";
import {NewDocuments} from "./Components/Documents/NewDocuments";
import {FfaUsers} from "./Components/FfaUsers/FfaUsers";
import {FfaUser} from "./Components/FfaUsers/FfaUser";
import {TableUpdate} from "./Components/Fragments/TableUpdate";



const { Header, Content, Footer, Sider } = Layout;

    const items1 = [

        {
            key: `/age-categories`,
            label: `Age categories`,
        },
        {
            key: `/match-event-natures`,
            label: `Match event natures`,
        },
        {
            key: `/location`,
            label: `Location`,
        },
        {
            key: `/gate-type`,
            label: `Gate type`,
        },
        {
            key: 'team-official-role',
            label: `Team official role`,
        },
        {
            key: 'national-facilities',
            label: `NationalFacilities`,
        },
        {
            label: `sss`,
            children: [
                {
                    key: 'road-expense-calculator',
                    label: `RoadExpenseCalculator`,
                },
                {
                    key: 'documents/new',
                    label: `NewDocuments`,
                },
            ]
        },
        {
            key: 'ffa-users',
            label: `FfaUsers`,
        },
    ]



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
                        items={items1}
                        onClick={e=>navigate(e.key)}
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
                        <Route exact path={'team-official-role'} element={<TeamOfficialRole />} />
                        <Route exact path={'team-official-role/new'} element={<CreateAndUpdateTeamOfficialRole />} />
                        <Route exact path={'team-official-role/:id'} element={<CreateAndUpdateTeamOfficialRole />} />
                        <Route exact path={'national-facilities'} element={<NationalFacilities />} />
                        <Route exact path={'national-facilities/new'} element={<CreateAndUpdateNationalFacilities />} />
                        <Route exact path={'national-facilities/:id'} element={<CreateAndUpdateNationalFacilities />} />
                        <Route exact path={'road-expense-calculator'} element={<RoadExpenseCalculator />} />
                        <Route exact path={'documents/new'} element={<NewDocuments />} />
                        <Route exact path={'ffa-users'} element={<FfaUsers />} />
                        <Route exact path={'ffa-users/:id'} element={<FfaUser />} />
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
