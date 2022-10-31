import {useDispatch, useSelector} from "react-redux";
import {DatePicker, Form, Input, Modal, Select} from "antd";
import {UserOutlined} from "@ant-design/icons";
import React, {useRef} from "react";
import moment from "moment/moment";
import UserImage from "../Fragments/UserImage";
import Configs from "../../Configs";


function UpdateModal({isModalOpen2, setIsModalOpen2}) {
    let userRedux = useSelector((state) => state.auth.user)
    const {Images} =Configs;
    let imagesKey = Object.keys(Images)
    let dispatch = useDispatch()

    const formRef = useRef();
    const handleOk = () => {
        formRef.current.submit()
    };

    const handleCancel = () => {
        setIsModalOpen2(false);
    };

    const onFinish = (values) => {
        dispatch({
            type:'UPDATE_USER',
            payload:{
                ...userRedux,
                ...values,
                date_of_birth:moment(values.date_of_birth).format('DD-MM-YYYY')
            }
        })
        formRef.current.resetFields();
        setIsModalOpen2(false)
    }

    const handleKeyPress = (e) => {
        if(e.key === 'Enter'){
            formRef.current.submit();
            setIsModalOpen2(false);
        }
    }
    return<Modal title="Update" open={isModalOpen2} onOk={handleOk} onCancel={handleCancel}>
    <Form
        ref={formRef}
        name="normal_login"
        className="login-form"
        initialValues={{
            name: userRedux.name,
            date_of_birth: moment(userRedux.date_of_birth),
            image_id: userRedux.image_id
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
            <Input  onKeyPress={handleKeyPress} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="New Username" />
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
        <Form.Item
            name="image_id"
        >
           <Select>
               {
                   imagesKey.map((el) => (<Select.Option key={el}><UserImage id={el} /></Select.Option>))
               }
           </Select>
        </Form.Item>
    </Form>
    </Modal>
}

export {UpdateModal};