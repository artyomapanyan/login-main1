import {useState} from "react";
import React from 'react';
import {Button, Form, Input} from 'antd';
import {useSelector} from "react-redux";
import {updateSingleItem} from "../../ApiCalls";


function TableUpdate({recordTableName, dataIndex}) {
    let authRedux = useSelector((state) => state.auth)

    const [textToInput, setTextToInput] = useState(false);
    const [loading,setLoading] = useState(false);
    const [tableUpdateState, setTableUpdateState] = useState(recordTableName);

    const changeTextToInput = () => {
        setTextToInput(true)
    }

    const onFinish = (values) => {
        setLoading(true);
        updateSingleItem(authRedux.access_token,'AgeCategoryNature', recordTableName.id, {...recordTableName, ...values}).then((e)=>{
            setTableUpdateState(e)
            setLoading(false);
            setTextToInput(false)
        })


    }
    const onCancel = () => {
        setTextToInput(false)
    }

    return (
        <div>
            {!textToInput ? <p style={{cursor: "pointer"}} onClick={changeTextToInput}>{tableUpdateState[dataIndex]}</p> : <Form
                    name="changeName"
                    onFinish={onFinish}
                    initialValues={{
                        [dataIndex]:tableUpdateState[dataIndex]
                    }}
                    style={{display:"flex"}}
                >
                    <Form.Item
                        name={dataIndex}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item>
                        <Button loading={loading} style={{marginLeft:10}} type="primary" htmlType="submit">Update</Button>
                    </Form.Item>
                    <Form.Item>
                        <Button style={{marginLeft:10}} onClick={onCancel} type="dashed" htmlType="submit">Cancel</Button>
                    </Form.Item>
                </Form>
            }
        </div>
    )
}
export {TableUpdate}