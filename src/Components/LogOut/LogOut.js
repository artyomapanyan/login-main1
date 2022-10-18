
import { Button } from 'antd';
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";



function LogOut() {
    let authPerson = useSelector((state) => state.auth)

    let dispatch = useDispatch()

    let navigate = useNavigate();

    const onLogOut = () => {
        dispatch({
            type:'LOGOUT'
        })
        navigate("/")
    }

    return(
        <div>
            <Button type="primary" onClick={onLogOut}>Log Out</Button>
        </div>
    )
}
export {LogOut}