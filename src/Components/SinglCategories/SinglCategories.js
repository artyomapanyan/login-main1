
import React, {useEffect, useRef, useState} from "react";
import {useSelector} from "react-redux";
import {getSinglItem, updateSingleItem} from "../../ApiCalls";
import {useNavigate, useParams} from "react-router-dom";
import {Button, Form, Input, Spin} from "antd";

function SinglCategories() {
    let authRedux = useSelector((state) => state.auth)

    const navigate = useNavigate();
    const params = useParams();
    const [loading,setLoading] = useState(true)

    const [ageCategoryState, setAgeCategoryState] = useState({});

    console.log(params,"ddddd")
    useEffect(()=>{
        setLoading(true)
        getSinglItem(authRedux.access_token,'AgeCategoryNature', params.id).then(ageCategory=>{
            setAgeCategoryState(ageCategory)
            setLoading(false)
        })
    },[])

    const formRef = useRef();

    const onFinish = (values) => {
        setLoading(true);
        updateSingleItem(authRedux.access_token,'AgeCategoryNature', params.id, values).then((e)=>{
            setAgeCategoryState(e);
            setLoading(false);
        })
    }

    const handleKeyPress = (event) => {
        if(event.key === 'Enter'){
            formRef.current.submit();
        }
    }
    return(
        <div>
            {loading?<Spin/>:<Form
                ref={formRef}
                name="normal_login"
                className="login-form"
                initialValues={ageCategoryState}
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



            </Form>}
        </div>
    )
}
export {SinglCategories}