import React, {useEffect, useRef, useState} from 'react';
import {Button, Form, Input, Select} from "antd";
import {createSingleItem, getAll, getSinglItem, updateSingleItem} from "../../ApiCalls";
import {useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";


function CreateAndUpdateTeamOfficialRole() {
    let authRedux = useSelector((state) => state.auth)
    const formRef = useRef();
    const navigate = useNavigate();
    const params = useParams();
    const [gateTypeState, setGateTypeState] = useState({});
    const [loading,setLoading] = useState(false);
    const [DocumentTypeState, setDocumentTypeState] = useState([]);

    const onFinish = (values) => {
        setLoading(true)
        if(params.id){
            updateSingleItem(authRedux.access_token,'TeamOfficialRole', params.id, values).then((e)=>{
                setGateTypeState(e)
                setLoading(false);
            })
        }else{
            createSingleItem(authRedux.access_token,'TeamOfficialRole',  values).then((e)=>{
                navigate(`/team-official-role/${e.id}`)
            })
        }

    }

    useEffect(()=>{
        setLoading(true)
        Promise.all([
            params.id?getSinglItem(authRedux.access_token,'TeamOfficialRole', params.id):{},
            getAll(authRedux.access_token,'DocumentType')
        ]).then(responses=>{
            setGateTypeState(responses[0])
            setDocumentTypeState(responses[1])
            setLoading(false)
        })
    },[])


    const handleKeyPress = (event) => {
        if(event.key === 'Enter'){
            formRef.current.submit();
        }
    }

    console.log(gateTypeState, DocumentTypeState)
    return (
        <div>
            {loading ? <spin />:<Form
                ref={formRef}
                name="GateType"
                onFinish={onFinish}
                initialValues={{...gateTypeState,
                    required_document_types: gateTypeState?.required_document_types?.map(el => el.id)
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

                    label={'document types'}
                    name="required_document_types"
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
                        {DocumentTypeState.map((el) => {
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

export {CreateAndUpdateTeamOfficialRole}