import {useDispatch, useSelector} from "react-redux";
import { Form, Input, Modal} from "antd";
import {UserOutlined} from "@ant-design/icons";
import React, {useRef, useState} from "react";



function UpdatePasswordModal({isModalOpen1, setIsModalOpen1}) {
    let userRedux = useSelector((state) => state.auth.user)
    let dispatch = useDispatch()

    const [inputDisabled, setInputDisabled] = useState(true)

    const formRef = useRef();
    const handleOk = () => {
        //console.log(formRef.current)
        formRef.current.submit()
    };


    const handleCancel = () => {
        setIsModalOpen1(false);
    };

    const onFinish = (values) => {
        dispatch({
            type:'UPDATE_USER',
            payload:{
                ...userRedux,
                password:values.new_password_2
                ,


            }
        })
        formRef.current.resetFields();
        setIsModalOpen1(false)
        setInputDisabled(true)
    }

    const handleKeyPress = (e) => {
        if(e.key === 'Enter'){
            formRef.current.submit();
            setIsModalOpen1(false);
        }
    }



    return<Modal title="Update Password" open={isModalOpen1} onOk={handleOk} onCancel={handleCancel}>
        <Form
            ref={formRef}
            className="login-form"
            onFinish={onFinish}
        >
            <Form.Item
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Password!',
                    },
                    {
                        validator:(rule, value)=>{
                            if(userRedux.password !== value){
                                setInputDisabled(true)
                                return Promise.reject('неправильный пароль')
                            }
                            setInputDisabled(false)
                            return Promise.resolve()
                        }
                    }
                ]}

            >
                <Input  onKeyPress={handleKeyPress} prefix={<UserOutlined className="site-form-item-icon" />} type="password"  placeholder="Old Password" />
            </Form.Item>
            <Form.Item
                name="new_password_1"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Password!',
                    }

                ]}

            >
                <Input  onKeyPress={handleKeyPress} prefix={<UserOutlined className="site-form-item-icon" />} disabled={inputDisabled} type="password" placeholder="New Password" />
            </Form.Item>
            <Form.Item
                name="new_password_2"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Password!',
                    },
                    {
                        validator:(rule, value)=>{
                           let passwordValue = formRef.current.getFieldValue('new_password_1');
                            if(passwordValue !== value){
                                return Promise.reject('неправильный пароль')
                            }
                            return Promise.resolve()
                        }
                    }
                ]}

            >
                <Input  onKeyPress={handleKeyPress} prefix={<UserOutlined className="site-form-item-icon" />} disabled={inputDisabled} type="password" placeholder="Repeat Password" />
            </Form.Item>

        </Form>
    </Modal>
}

export {UpdatePasswordModal};