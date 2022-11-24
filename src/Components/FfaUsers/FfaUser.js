import {Button, Form, Input, Select, Spin} from "antd";

import React, {useEffect, useRef, useState} from "react";
import {useSelector} from "react-redux";
import api from "../../api";
import {getAll, getSinglItem} from "../../ApiCalls";
import {useNavigate, useParams} from "react-router-dom";

function FfaUser() {
    let authRedux = useSelector((state) => state.auth)
    const formRef = useRef();
    const navigate = useNavigate();
    const params = useParams();

    const [loading,setLoading] = useState(false);
    const [roleState,setRoleState] = useState([]);
    const [userState,setUserState] = useState({});
    const [org,setOrg] = useState([]);
    const [searchPersonState,setSearchPersonState] = useState([]);



    const onFinish = (values) => {
        console.log(values)
    }

    useEffect(()=>{
        setLoading(true)
        Promise.all([
            params.id ? getSinglItem(authRedux.access_token, 'User', params.id) : {},
            getAll(authRedux.access_token, 'Role')
        ]).then(responses => {
            let organ = [responses[0]?.organisation];
            setUserState(responses[0])
            setRoleState(responses[1])
            setOrg(organ)
            setLoading(false)
        })
    },[])

    const searchPerson = (value) => {
        if(value.length >= 3) {

            setTimeout(()=>{
                fetch(`${api.Person.search.url}?name=${value}`, {
                    method: api.Person.search.method,
                    headers: {
                        Authorization: authRedux.access_token,
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                }).then(resp => resp.json()).then((resp) => {
                    setSearchPersonState(resp?.payload?.Person)
                    setLoading(false)
                })
            })

        }
    }

    let languages = {
        en: {
            locale: 'en_US',
            name: 'English',
            messages: 'en',
        },
        ru: {
            locale: 'ru_RU',
            name: 'Русский',
            messages: 'ru',
        },
        hy: {
            locale: 'hy_AM',
            name: 'Հայերեն',
            messages: 'hy',
        },
};

    return(
        <div style={{display:"flex", justifyContent:"center"}}>
            {loading ? <Spin />:<Form
                style={{display:"block", justifyContent:"flex-end"}}
                ref={formRef}
                name="GateType"
                onFinish={onFinish}
                initialValues={{
                    name:userState?.name,
                    email:userState?.email,
                    tabel_number:userState?.tabel_number,
                    roles:userState?.roles?.map(el => el.id),
                    organisation_id:userState?.organisation_id,
                    language:userState?.language,
                    disabled:userState?.disabled
                }}

            >
                <Form.Item
                    label="Էլ փոստ"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Password!',
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    label="Անուն"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Password!',
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    label="Տաբելային համար"
                    name="tabel_number"

                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    label="Փնտրել անձին"
                    name="min_age"
                >
                    <Select
                        showSearch
                        onSearch={searchPerson}
                        optionFilterProp="name"
                    >
                        {searchPersonState.map((el) => {
                            return <Select.Option key={el.id} value={el.id} name={el?.local_name?.title}>{el?.local_name?.title} </Select.Option>
                        })}
                    </Select>
                </Form.Item>
                <Form.Item
                    label="Դեր"
                    name="roles"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Password!',
                        },
                    ]}

                >
                    <Select
                        mode={'multiple'}
                    >
                        {roleState.map((el) => {
                            return <Select.Option key={el.id} value={el.id} name={el?.name}>{el?.name} </Select.Option>
                        })}
                    </Select>

                </Form.Item>
                <Form.Item
                    label="Կազմակերպություն"
                    name="organisation_id"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Password!',
                        },
                    ]}
                >
                    <Select>
                        {org.map((el) => {
                            return <Select.Option key={el.id} value={el.id} name={el?.name}> {el?.local_name?.short_name + "(" + el?.organisation_nature?.name + ")"}</Select.Option>
                        })}
                    </Select>
                </Form.Item>
                <Form.Item

                    label='Լեզու'
                    name="language"
                >
                    <Select
                        showSearch
                        style={{ width: 400, justifyContent:"flex-end"}}
                        optionFilterProp="name"
                    >
                        {Object.values(languages).map((el) => {
                            return <Select.Option key={el.id} value={el.id} name={el?.name}>
                                {el?.name}
                            </Select.Option>
                        })}
                    </Select>
                </Form.Item>
                <Form.Item
                    label='Արգելափակված'
                    name="disabled"
                >
                    <Select
                        showSearch
                        style={{ width: 400, justifyContent:"flex-end"}}
                    >
                        <Select.Option value={0}>այո</Select.Option>
                        <Select.Option value={1}>ոչ</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">Թարմացնել</Button>
                </Form.Item>
            </Form>}
        </div>
    )
}
export {FfaUser}