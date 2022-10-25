
import {useSelector} from "react-redux";
import {Button, Card} from "antd";
import {UpdateModal} from "./UpdateModal";
import {UpdatePasswordModal} from "./UpdatePasswordModal";
import {Comments} from "./Comments";
import {useState} from "react";
import "./LoginPage.css"
import UserImage from "../Fragments/UserImage.js";
import React from 'react';
import {useParams} from "react-router-dom";
const { Meta } = Card;


function LoginPage() {
    let redux = useSelector((state) => state)
    const [isModalOpen2, setIsModalOpen2] = useState(false);
    const [isModalOpen1, setIsModalOpen1] = useState(false);
    let params = useParams();


    const showModalUpdate = () => {
        setIsModalOpen2(true);
    };

    const showModalUpdatePassword = () => {
        setIsModalOpen1(true);
    };
    let isGuest = params.id;
    let User =isGuest ? redux.users.find(user=>user.id===(+isGuest)):redux.auth.user;

    return(
        <div>

                <Card
                    hoverable
                    style={{
                        width: 200,
                        height:200
                    }}
                    cover={<UserImage id={User.image_id} />}
                >
                    <Meta title={User.name} />
                </Card>



            {!isGuest?<div>
              <div>
                <Button type="primary" onClick={showModalUpdate}>
                    Update
                </Button>{"   "}
                <Button type="primary" onClick={showModalUpdatePassword}>
                    Update Password
                </Button>

                <UpdateModal
                    isModalOpen2={isModalOpen2}
                    setIsModalOpen2={setIsModalOpen2}/>

                <UpdatePasswordModal
                    isModalOpen1={isModalOpen1}
                    setIsModalOpen1={setIsModalOpen1}/>
              </div>


            </div>:null}
            <div>
                <Comments User={User}/>
            </div>

        </div>
    )
}

export {LoginPage};