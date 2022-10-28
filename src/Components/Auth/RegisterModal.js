import React, {useRef} from "react"
import {Checkbox, Form, Input, Modal, DatePicker, Space} from "antd";
import {LockOutlined, UserOutlined} from "@ant-design/icons";
import {useDispatch, useSelector} from "react-redux";
import moment from "moment";
import axios from "axios";

function RegisterModal({setIsModalOpen1,isModalOpen1}){
    let usersRedux = useSelector((state) => state.users)
    let dispatch = useDispatch()

    const formRef = useRef();
    const handleOk = () => {
        //console.log(formRef.current)
        formRef.current.submit()
        //console.log(formRef.current.isFieldsTouched())
    };
    const handleCancel = () => {
        setIsModalOpen1(false);
    };
    const onFinish = (values) => {
        console.log(values)
        axios.get(`http://ffa/sanctum/csrf-cookie`).then(response => {
            const Data = new FormData();

            Data.append('email', values.email)
            Data.append('password', values.password)
            Data.append('password_confirmation', values.password_confirmation)
            Data.append('device_name', values.device_name)
            axios.request( {
                method:'POST',
                url:`https://app.kideroapp.com/api/v1/auth/register`
            }).then((response) => {
                console.log("sdfsdf",Data)
            }).catch(e => {
                console.log(e)
            })
        })
            dispatch({
                type:'register',
                payload:{
                    ...values,
                    id:Math.floor(Math.random() * (1000000 - 1 + 1)) + 1,
                    date_of_birth:moment(values.date_of_birth).format('DD-MM-YYYY')
                }
            })
            setIsModalOpen1(false);
            formRef.current.resetFields()

    };

    const handleKeyPress = (event)=>{
        if(event.key === 'Enter'){
            formRef.current.submit();
        }
    }

    return <Modal title="Please input new Username and Password" open={isModalOpen1} okText={"Register"} onOk={handleOk} onCancel={handleCancel}>
        <Form
            ref={formRef}
            name="normal_login"
            className="login-form"
            initialValues={{
                remember: true
            }}
            onFinish={onFinish}
        >
            <Form.Item
                name="name"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Username!',
                    },
                    {
                        validator:(rule, value)=>{
                           if(usersRedux.find(el => el.name === value)){
                               return Promise.reject('такое имя уже существует')

                           }
                           return Promise.resolve()
                    }
                    }
                ]}
            >
                <Input onKeyPress={handleKeyPress} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="New Username" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Password!',
                    },
                ]}
            >
                <Input
                    onKeyPress={handleKeyPress}
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="New Password"
                />
            </Form.Item>
            <Form.Item
                name="date_of_birth"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Password!',
                    },
                ]}
            >
                <DatePicker
                    placeholder={'Date of birth'} />
            </Form.Item>


        </Form>
    </Modal>
}
export {RegisterModal}