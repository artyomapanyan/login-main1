import React from "react";
import {useSelector} from "react-redux";
import { Avatar, List } from 'antd';
import {Link, useNavigate} from "react-router-dom";
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
                                    avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                                    description={<Link to={`/users/${item.id}`}>{item.name} {item.id}</Link>}
                                />

                        </List.Item>
                    )}
                />
        </div>
    )
}

export {Users}