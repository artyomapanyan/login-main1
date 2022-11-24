import React, {useEffect, useRef, useState} from 'react';
import {Button, Form, Input, Select, Spin} from "antd";
import {createSingleItem, getAll, getSinglItem, updateSingleItem} from "../../ApiCalls";
import {useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";


function ApdateMatchEventNatures() {
    let authRedux = useSelector((state) => state.auth)
    const formRef = useRef();
    const navigate = useNavigate();
    const params = useParams();

    const [matchEventState, setMatchEventState] = useState({});
    const [loading,setLoading] = useState(true);
    const [disciplinState, setDisciplinState] = useState([]);

    const onFinish = (values) => {
        setLoading(true);
        updateSingleItem(authRedux.access_token,'MatchEventNature', params.id, values).then((e)=>{
            setMatchEventState(e);
            setLoading(false);
            navigate("/match-event-natures")
        })
    }

    useEffect(()=>{
        setLoading(true)
        Promise.all([
            getSinglItem(authRedux.access_token,'MatchEventNature', params.id),
            getAll(authRedux.access_token,'Discipline')
        ]).then(responses=>{
            setMatchEventState(responses[0])
            setDisciplinState(responses[1])
            setLoading(false)
        })
    },[])

    const handleKeyPress = (event) => {
        if(event.key === 'Enter'){
            formRef.current.submit();
        }
    }

    return (
        <div>
            {loading?<Spin/>:<Form
                ref={formRef}
                name="normal_login"
                onFinish={onFinish}
                initialValues={{
                    ...matchEventState,
                    disciplines:matchEventState?.disciplines?.map(e=>e.id)
            }}
            >
                <Form.Item
                    label={'anvanum'}
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
            </Form>}
        </div>
    )
}

export {ApdateMatchEventNatures}