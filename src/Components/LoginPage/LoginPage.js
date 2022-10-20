import React, {useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Form, Input, Modal, DatePicker, Space, Button} from "antd";
import auth from "../../reducers/auth";
import {LockOutlined, UserOutlined} from "@ant-design/icons";
import moment from "moment/moment";
import {UpdateModal} from "./UpdateModal";



function LoginPage() {
    let reduxUsers = useSelector((state) => state)
    let dispatch = useDispatch()

    const [isModalOpen, setIsModalOpen] = useState(false);

    // const formRef = useRef();
    // const handleOk = () => {
    //     //console.log(formRef.current)
    //     formRef.current.submit()
    //     //console.log(formRef.current.isFieldsTouched())
    // };
    const showModal = () => {
        setIsModalOpen(false);
    };




    return(
        <div>
            {reduxUsers.auth.user.name} {"    "}
            <Button type="primary" onClick={showModal}>
                Update
            </Button>


                <UpdateModal
                    isModalOpen={isModalOpen} />


        </div>
    )
}

export {LoginPage};