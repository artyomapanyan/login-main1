import React, {useRef} from "react"
import { Form, Input, Modal} from "antd";
import {LockOutlined, UserOutlined} from "@ant-design/icons";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import api from "../../api";
import moment from "moment/moment";

function LoginModal({setIsModalOpen,isModalOpen}){
    let reduxState = useSelector((state) => state)
    let dispatch = useDispatch()

    let navigate = useNavigate();

    const formRef = useRef();
    const handleOk = () => {
        formRef.current.submit()
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const onFinish = (values) => {
        let user =  reduxState.users.find(el =>el.name === values.name && el.password === values.password)
        fetch(api.Auth.login.url,{
            method: api.Auth.login.method,
            body: JSON.stringify(values),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        }).then(resp=>resp.json()).then(response=>{
            console.log(response)
            dispatch({
                type:'LOGIN',
                payload:{
                    ...response.payload.Auth,
                    access_token: "Bearer " + response.payload.Auth.access_token
                }
            })
        })
        //setIsModalOpen(false);
    };

    const handleKeyPress = (event)=>{
        if(event.key === 'Enter'){
            formRef.current.submit();
        }
    }

    return <Modal title="Please input your Username and Password" open={isModalOpen} okText={"Login"} onOk={handleOk} onCancel={handleCancel}>
        <Form
            ref={formRef}
            name="normal_login"
            className="login-form"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}

        >
            <Form.Item
                name="email"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Username!',
                    },
                ]}
            >
                <Input onKeyPress={onFinish} onKeyPress={handleKeyPress} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[
                    {

                    },
                ]}
            >
                <Input
                    onKeyPress={onFinish}
                    onKeyPress={handleKeyPress}
                    type="text"
                    placeholder="Password"
                />
            </Form.Item>
        </Form>
    </Modal>
}
export {LoginModal}