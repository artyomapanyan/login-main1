import React from "react";
import {useDispatch, useSelector} from "react-redux";
import { List } from 'antd';
import {Link, useNavigate} from "react-router-dom";
import UserImage from "../Fragments/UserImage.js";
import moment from "moment";


function Users() {
    let redux= useSelector((state) => state);
    let dispatch = useDispatch();

    const navigate = useNavigate()

    const onMessage = (item) => {
        navigate(`/messages/${item.id}`)
    }

    return(
        <div>
                <List
                    itemLayout="horizontal"
                    dataSource={redux.users}
                    renderItem={(item) => (
                        <List.Item>

                                <List.Item.Meta
                                    avatar={<UserImage id={item.image_id} />}
                                    description={<Link to={`/users/${item.id}`}>{item.name} {item.id} </Link> }
                                    title={<button onClick={()=>onMessage(item)}>Messages</button>}
                                />

                        </List.Item>
                    )}
                />
        </div>
    )
}

export {Users}