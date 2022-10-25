import React from "react";
import {useSelector} from "react-redux";
import { List } from 'antd';
import {Link, useNavigate} from "react-router-dom";
import UserImage from "../Fragments/UserImage.js";


function Users() {
    let reduxUsers = useSelector((state) => state.users)

    const navigate = useNavigate()

    return(
        <div>
                <List
                    itemLayout="horizontal"
                    dataSource={reduxUsers}
                    renderItem={(item) => (
                        <List.Item>

                                <List.Item.Meta
                                    avatar={<UserImage id={item.image_id} />}
                                    description={<Link to={`/users/${item.id}`}>{item.name} {item.id}</Link>}
                                />

                        </List.Item>
                    )}
                />
        </div>
    )
}

export {Users}