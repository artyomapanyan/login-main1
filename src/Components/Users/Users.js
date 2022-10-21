import React from "react";
import {useDispatch, useSelector} from "react-redux";
import { Avatar, List } from 'antd';
import {Link, useNavigate} from "react-router-dom";
function Users() {
    let reduxUsers = useSelector((state) => state.users)


    const onClickPerson = () => {
    alert("aaa")
    }

    return(
        <div>

            <List
                itemLayout="horizontal"
                dataSource={reduxUsers}
                renderItem={(item) => (
                    <List.Item>
                        <List.Item.Meta
                            onClick={onClickPerson}
                            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                            title={<a href="https://ant.design">{item.title}</a>}
                            description={`${item.name} ${item.id}`}
                        />
                    </List.Item>
                )}
            />
        </div>
    )
}

export {Users}