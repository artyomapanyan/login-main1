import React, {useEffect, useRef, useState} from 'react';
import {Button, Form, Input, Select} from "antd";
import {createSingleItem, getAll, getSinglItem, updateSingleItem} from "../../ApiCalls";
import {useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";


function CreateAndUpdateGateType() {
    let authRedux = useSelector((state) => state.auth)
    const formRef = useRef();
    const navigate = useNavigate();
    const params = useParams();
    const [gateTypeState, setGateTypeState] = useState({});
    const [loading,setLoading] = useState(false);

    const onFinish = (values) => {
        setLoading(true)
        if(params.id){
            updateSingleItem(authRedux.access_token,'GateType', params.id, values).then((e)=>{
                setGateTypeState(e)
                setLoading(false);
            })
        }else{
            createSingleItem(authRedux.access_token,'GateType',  values).then((e)=>{
                navigate(`/gate-type/${e.id}`)
            })
        }

    }

    useEffect(()=>{
        setLoading(true)
        Promise.all([
            params.id?getSinglItem(authRedux.access_token,'GateType', params.id):{},
        ]).then(responses=>{
            setGateTypeState(responses[0])
            // console.log(responses[0], responses[1])
            setLoading(false)
        })
    },[params.id])


    const handleKeyPress = (event) => {
        if(event.key === 'Enter'){
            formRef.current.submit();
        }
    }
    console.log("qqqqq",gateTypeState)
    return (
        <div>
            {loading ? <spin />:<Form
                ref={formRef}
                name="GateType"
                className="create-gate-type"
                onFinish={onFinish}
                initialValues={{...gateTypeState}}
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

export {CreateAndUpdateGateType}