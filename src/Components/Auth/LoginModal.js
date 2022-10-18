import React, {useRef} from "react"
import { Form, Input, Modal} from "antd";
import {LockOutlined, UserOutlined} from "@ant-design/icons";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

function LoginModal({setIsModalOpen,isModalOpen}){
    let reduxState = useSelector((state) => state)
    //console.log(reduxState)
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
        if(user) {
            dispatch({
                type:'LOGIN',
                payload:user
            })

            formRef.current.resetFields()
            navigate("test");
            setIsModalOpen(false);
        } else {
            alert("неправильное имя пользователя или пароль")
        }

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
                name="name"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Username!',
                    },
                ]}
            >
                <Input onKeyPress={handleKeyPress} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
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
                    placeholder="Password"
                />
            </Form.Item>
        </Form>
    </Modal>
}
export {LoginModal}