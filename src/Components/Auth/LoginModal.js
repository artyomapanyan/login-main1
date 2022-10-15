import React, {useRef} from "react"
import {Checkbox, Form, Input, Modal} from "antd";
import {LockOutlined, UserOutlined} from "@ant-design/icons";
function LoginModal({setIsModalOpen,isModalOpen}){
    const formRef = useRef();
    const handleOk = () => {
        console.log(formRef.current)
        formRef.current.submit()
        console.log(formRef.current.isFieldsTouched())
        //setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const alert = ()=>{
        alert('445445')
        formRef.current.setFieldsValue({
            username:'alert'
        })
    }
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
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
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Username!',
                    },
                ]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
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
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                />
            </Form.Item>
            <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>


            </Form.Item>


        </Form>
    </Modal>
}
export {LoginModal}