import {Button, Form, Select, Spin, Upload} from "antd";
import {CalculatorOutlined, PlusOutlined} from "@ant-design/icons";
import React, {useEffect, useRef, useState} from "react";
import api from "../../api";
import {useSelector} from "react-redux";
import {updateSingleItem} from "../../ApiCalls";
import {useParams} from "react-router-dom";


function NewDocuments() {
    let authRedux = useSelector((state) => state.auth)
    const formRef = useRef();
    const params = useParams()

    const [loading,setLoading] = useState(false);
    const [documentTypeState,setDocumentTypeState] = useState([]);
    const [organisationSearchState,setOrganisationSearchState] = useState([]);
    const [confirmationStatusState,setConfirmationStatusState] = useState([]);

    const onFinish = (values) => {
        setLoading(true);
        updateSingleItem(authRedux.access_token,'DocumentType', params.id, values).then((e)=>{
            setLoading(false);
        })
    }

    useEffect(()=>{
        fetch(`${api.DocumentType.all.url}`,{
            method:api.DocumentType.all.method,
            headers: {
                Authorization: authRedux.access_token,
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        }).then(resp=>resp.json()).then((resp)=>{
            setDocumentTypeState(resp?.payload?.DocumentType?.data)

        })

        fetch(`${api.ConfirmationStatus.all.url}`,{
            method:api.ConfirmationStatus.all.method,
            headers: {
                Authorization: authRedux.access_token,
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        }).then(resp=>resp.json()).then((resp)=>{
            setConfirmationStatusState(resp?.payload?.ConfirmationStatus?.data)

        })
    },[])

    const hendleChange = (fileData) => {
        if(fileData.fileList.length !== 0) {
            formRef.current.setFieldsValue({
                file_id:fileData?.file?.response?.payload?.File?.id
            })
        } else {
            formRef.current.setFieldsValue({
                file_id:null
            })
        }

    }

    const onSearchOrganization = (value) => {
        if(value.length >= 3) {
            setTimeout(() => {
                fetch(`${api.Organisation.search.url}?name=${value}`, {
                    method: api.Organisation.search.method,
                    headers: {
                        Authorization: authRedux.access_token,
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                }).then(resp => resp.json()).then((resp) => {
                    setOrganisationSearchState(resp?.payload?.Organisation)
                })
            }, 1000)
        }
    }

    return (
        <div style={{display:"flex", justifyContent:"center"}}>
            {loading ? <Spin />:<Form
                style={{display:"block", justifyContent:"flex-end"}}
                ref={formRef}
                name="GateType"
                onFinish={onFinish}
                initialValues={[]}

            >
                <Form.Item
                    label='Կարգավիճակ'
                    name="name"
                >
                    <Select
                        style={{ width: 400, display:"flex", justifyContent:"flex-end"}}
                        optionFilterProp="name"

                    >
                        {confirmationStatusState.map((el) => {
                            return <Select.Option key={el.id} value={el.id} name={el?.name}> {el?.name}</Select.Option>
                        })}
                    </Select>
                </Form.Item>
                <Form.Item
                    label='Փաստաթղթի տեսակ'
                    name="name
"
                >
                    <Select
                        showSearch
                        //onSearch={searchPerson}
                        style={{ width: 400, justifyContent:"flex-end"}}
                        optionFilterProp="name"
                    >
                        {documentTypeState.map((el) => {
                            return <Select.Option key={el.id} value={el.id} name={el?.name}> {el?.name}</Select.Option>
                        })}
                    </Select>
                </Form.Item>
                <Form.Item
                    label='Կազմակերպություն'
                    name="local_name"
                >
                    <Select
                        showSearch
                        //onSearch={searchPerson}
                        style={{ width: 400, justifyContent:"flex-end"}}
                        optionFilterProp="name"
                        onSearch={onSearchOrganization}

                    >
                        {organisationSearchState.map((el) => {
                            return <Select.Option key={el.id} value={el.id} name={el?.local_name?.name}>{el?.local_name?.name}({el?.organisation_nature?.name})</Select.Option>
                        })}
                    </Select>
                </Form.Item>
                <Form.Item
                label='File'
                name="file_id"
                >
                    <Upload
                        name="file"
                        //accept=".pdf"
                        listType="picture-card"
                        showUploadList={{
                            showRemoveIcon: true,
                        }}
                        action={`${api.File.create.url}`}
                        headers={{
                            Authorization: authRedux.access_token,
                            Accept: 'application/json',
                        }}
                        onChange={hendleChange}

                    >

                        <div>
                            <PlusOutlined />
                            <div>
                                Upload
                            </div>
                        </div>
                    </Upload>
                </Form.Item>
                <Form.Item
                    name="name"
                >

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
export {NewDocuments}