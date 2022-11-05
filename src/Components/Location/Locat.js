import React, {useEffect, useRef, useState} from 'react';
import {Button, Form, Input, Select} from "antd";
import {createSingleItem, getAll, getSinglItem, updateSingleItem} from "../../ApiCalls";
import {useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";


function Locat() {
    let authRedux = useSelector((state) => state.auth)
    const formRef = useRef();
    const navigate = useNavigate();
    const params = useParams();
    const [locationState, setLocationState] = useState({});
    const [locationTypeState, setLocationTypeState] = useState([]);
    const [loading,setLoading] = useState(false);

    const onFinish = (values) => {
        setLoading(true)
        if(params.id){
            updateSingleItem(authRedux.access_token,'Location', params.id, values).then((e)=>{
                setLocationState(e)
                setLoading(false);
            })
        }else{
            createSingleItem(authRedux.access_token,'Location',  values).then((e)=>{
                navigate(`/location/${e.id}`)
            })
        }

    }

    useEffect(()=>{
        setLoading(true)
        Promise.all([
            params.id?getSinglItem(authRedux.access_token,'Location', params.id):{},
            getAll(authRedux.access_token,'LocationType')
        ]).then(responses=>{
            setLocationState(responses[0])
            setLocationTypeState(responses[1])
            setLoading(false)
        })
    },[params.id])


    const handleKeyPress = (event) => {
        if(event.key === 'Enter'){
            formRef.current.submit();
        }
    }

    return (
        <div>
            {loading ? <spin />:<Form
                ref={formRef}
                name="location"
                className="create-location"
                onFinish={onFinish}
                initialValues={{
                    ...locationState,
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
                    label={'code'}
                    name="code"
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
                    label={'erkir'}
                    name="location_type_id"
                    rules={[
                        {
                            required: true,
                            message: 'Please input name!',
                        }
                    ]}>
                    <Select
                        style={{
                            width: 300,
                        }}

                    >
                        {locationTypeState.map((el) => {
                            return <Select.Option key={el.id} value={el.id}>{el.title}</Select.Option>

                        })}
                    </Select>
                </Form.Item>
                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit" loading={loading}>
                        Submit
                    </Button>
                </Form.Item>
            </Form>}
        </div>
    )
}

export {Locat}