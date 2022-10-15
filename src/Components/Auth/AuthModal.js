import {Button} from "antd";
import React, {useRef, useState} from 'react';
import {LoginModal} from "./LoginModal";

function AuthModal() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    return (
        <div>
            <Button type="primary" onClick={showModal}>
                Login
            </Button>
            <Button type="text" style={{color: "white"}} danger>
                Register
            </Button>
            <LoginModal  isModalOpen={isModalOpen}
                        setIsModalOpen={setIsModalOpen} />

        </div>
    )
};

export default AuthModal;