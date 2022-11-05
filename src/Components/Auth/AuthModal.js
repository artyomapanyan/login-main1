import {Button} from "antd";
import React, {useRef, useState} from 'react';
import {LoginModal} from "./LoginModal";

function AuthModal() {
    const [isModalOpen, setIsModalOpen] = useState(false);


    const showLoginModal = () => {
        setIsModalOpen(true);
    };


    return (
        <div>
            <Button type="primary" onClick={showLoginModal}>
                Login
            </Button>

            <LoginModal  isModalOpen={isModalOpen}
                        setIsModalOpen={setIsModalOpen} />

        </div>
    )
};

export default AuthModal;