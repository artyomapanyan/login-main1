import React, {useEffect, useRef, useState} from 'react';
import {Button, Form, Input, Select, Spin} from "antd";
import { createSingleItem, getAll} from "../../ApiCalls";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";


function CreateMatchEventNatures() {
    let authRedux = useSelector((state) => state.auth)
    const formRef = useRef();
    const navigate = useNavigate();
    const [disciplinState, setDisciplinState] = useState([]);
    const [loading,setLoading] = useState(false);

    const onFinish = (values) => {
        setLoading(true)
        createSingleItem(authRedux.access_token,'MatchEventNature', values).then((e)=>{

            navigate(`/match-event-natures`)
        })
    }

    useEffect(()=>{
        getAll(authRedux.access_token,'Discipline').then((e)=>{
            setDisciplinState(e)
        })

    },[])


    const handleKeyPress = (event) => {
        if(event.key === 'Enter'){
            formRef.current.submit();
        }
    }


    return (
        <div>
            <Form
                ref={formRef}
                name="normal_login"
                className="login-form"
                onFinish={onFinish}
            >
                <Form.Item
                    label={'anvanwum'}
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: 'Please input name!',
                        }
                    ]}
                >
                    <Input onKeyPress={handleKeyPress} placeholder="Name"/>
                </Form.Item>
                <Form.Item
                    label={'marzadzev'}
                    name="disciplines"
                    rules={[
                        {
                            required: true,
                            message: 'Please input name!',
                        }
                    ]}>
                <Select
                    mode={'multiple'}
                    style={{
                        width: 300,
                    }}
                >
                    {disciplinState.map((el) => {
                        return <Select.Option key={el.id} value={el.id}>{el.name}</Select.Option>

                    })}
                </Select>
            </Form.Item>
                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export {CreateMatchEventNatures}