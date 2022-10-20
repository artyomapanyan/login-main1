import {useDispatch, useSelector} from "react-redux";
import {DatePicker, Form, Input, Modal} from "antd";
import {UserOutlined} from "@ant-design/icons";
import React, {useRef} from "react";
import moment from "moment/moment";


function UpdateModal(isModalOpen, setIsModalOpen) {
    let userRedux = useSelector((state) => state.auth.user)
    console.log(userRedux)
    let dispatch = useDispatch()

    const formRef = useRef();
    const handleOk = () => {
        //console.log(formRef.current)
        formRef.current.submit()

        //console.log(formRef.current.isFieldsTouched())
    };


    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const onFinish = (values) => {
        console.log(values, "adsd")
        dispatch({
            type:'UPDATE_USER',
            payload:{
                ...userRedux,
                name:values.name,
                date_of_birth:moment(values.date_of_birth).format('DD-MM-YYYY')

            }
        })
        setIsModalOpen(false)
        formRef.current.resetFields()
    }

    const handleKeyPress = (e) => {
        if(e.key === 'Enter'){
            formRef.current.submit();
        }
    }


    return<Modal title="Update" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
    <Form
        ref={formRef}
        name="normal_login"
        className="login-form"
        initialValues={{
            name: userRedux.name,
            date_of_birth: moment(userRedux.date_of_birth)

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
                // {
                //     validator:(rule, value)=>{
                //         if(userRedux.find(el => el.name === value)){
                //             return Promise.reject('такое имя уже существует')
                //
                //         }
                //         return Promise.resolve()
                //
                //     }
                //}
            ]}

        >
            <Input  onKeyPress={handleKeyPress} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="New Username" />
        </Form.Item>
        {/*<Form.Item*/}
        {/*    name="password"*/}
        {/*    rules={[*/}
        {/*        {*/}
        {/*            required: true,*/}
        {/*            message: 'Please input your Password!',*/}
        {/*        },*/}
        {/*    ]}*/}
        {/*>*/}
        {/*    <Input*/}
        {/*        onKeyPress={handleKeyPress}*/}
        {/*        prefix={<LockOutlined className="site-form-item-icon" />}*/}
        {/*        type="password"*/}
        {/*        placeholder="New Password"*/}
        {/*    />*/}
        {/*</Form.Item>*/}
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

export {UpdateModal};