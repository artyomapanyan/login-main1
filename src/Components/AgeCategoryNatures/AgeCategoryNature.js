import {Button, DatePicker, Form, Input} from "antd";
import React, {useRef, useState} from "react";
import {createSingleItem} from "../../ApiCalls";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";


function AgeCategoryNatue() {
    let authRedux = useSelector((state) => state.auth)
    const formRef = useRef();
    const navigate = useNavigate()

    const [loading,setLoading] = useState(false);



    const onFinish = (values) => {
        setLoading(true)
        createSingleItem(authRedux.access_token,'AgeCategoryNature', values).then((e)=>{
            console.log(e)
            navigate(`/age-categories/${e.id}`)
        })

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
                    <Button type="primary" loading={loading} htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>



            </Form>
        </div>
    )
}

export {AgeCategoryNatue}