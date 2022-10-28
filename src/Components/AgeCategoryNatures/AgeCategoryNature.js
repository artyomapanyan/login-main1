import {Button, DatePicker, Form, Input} from "antd";
import {LockOutlined, UserOutlined} from "@ant-design/icons";
import React, {useRef} from "react";

function AgeCategoryNatue() {

    const formRef = useRef();

    const onFinish = (values) => {
        console.log(values)
    }

    const handleKeyPress = (event) => {
        if(event.key === 'Enter'){
            formRef.current.submit();
        }
    }

    return(
        <div>
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
                        }
                    ]}
                >
                    <Input onKeyPress={handleKeyPress} placeholder="Name" />
                </Form.Item>
                <Form.Item
                    name="min_age"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Password!',
                        },
                    ]}
                >
                    <Input onKeyPress={handleKeyPress} placeholder="Min Age"
                    />
                </Form.Item>
                <Form.Item
                    name="max_age"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Password!',
                        },
                    ]}
                >
                    <Input onKeyPress={handleKeyPress} placeholder="Max Age"/>
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



            </Form>
        </div>
    )
}

export {AgeCategoryNatue}