
import {useSelector} from "react-redux";
import {Button, Card} from "antd";
import {UpdateModal} from "./UpdateModal";
import {UpdatePasswordModal} from "./UpdatePasswordModal";
import {useState} from "react";
import "./LoginPage.css"
import UserImage from "../Fragments/UserImage";
import React from 'react';
const { Meta } = Card;


function LoginPage() {
    let reduxUsers = useSelector((state) => state)
    // console.log("nkar",reduxUsers.auth.user.image_id)
    const [isModalOpen2, setIsModalOpen2] = useState(false);
    const [isModalOpen1, setIsModalOpen1] = useState(false);

    const showModalUpdate = () => {
        setIsModalOpen2(true);
    };

    const showModalUpdatePassword = () => {
        setIsModalOpen1(true);
    };

    return(
        <div>
            <div className="userImage">
                <Card
                    hoverable
                    style={{
                        width: 240,
                    }}
                    cover={<UserImage id={reduxUsers.auth.user.image_id} />}
                >
                    <Meta title={reduxUsers.auth.user.name} />
                </Card>


            </div>

            <Button type="primary" onClick={showModalUpdate}>
                Update
            </Button>{"   "}
            <Button type="primary" onClick={showModalUpdatePassword}>
                Update Password
            </Button>
            {/*<ImageShower id={1}/>*/}

                <UpdateModal
                    isModalOpen2={isModalOpen2}
                    setIsModalOpen2={setIsModalOpen2}/>

                <UpdatePasswordModal
                    isModalOpen1={isModalOpen1}
                    setIsModalOpen1={setIsModalOpen1}/>

        </div>
    )
}

export {LoginPage};