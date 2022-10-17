import {Button} from "antd";
import React, {useRef, useState} from 'react';
import {LoginModal} from "./LoginModal";
import {RegisterModal} from "./RegisterModal";

function AuthModal() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalOpen1, setIsModalOpen1] = useState(false);

    const showLoginModal = () => {
        setIsModalOpen(true);
    };

    const showRegisterModal = () => {
        setIsModalOpen1(true);
    };

    return (
        <div>
            <Button type="primary" onClick={showLoginModal}>
                Login
            </Button>
            <Button type="text" onClick={showRegisterModal} style={{color: "white"}} danger>
                Register
            </Button>
            <LoginModal  isModalOpen={isModalOpen}
                        setIsModalOpen={setIsModalOpen} />
            <RegisterModal isModalOpen1={isModalOpen1}
                           setIsModalOpen1={setIsModalOpen1} />

        </div>
    )
};

export default AuthModal;