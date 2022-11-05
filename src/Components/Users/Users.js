import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AutoComplete, Button, Input, List, Popconfirm} from 'antd';
import {Link, useNavigate} from "react-router-dom";
import UserImage from "../Fragments/UserImage.js";
import {Form, Select} from 'antd';
import moment from "moment";
import {UserOutlined} from "@ant-design/icons";


function Users() {
    let redux= useSelector((state) => state);
    let dispatch = useDispatch();

    const navigate = useNavigate()

    const [filterState, setFilterState] = useState({})

    const onMessage = (item) => {
        navigate(`/messages/${item.id}`)
    }

    const onFinish = (changed,values) => {
        setFilterState(values)
    }
    // console.log(redux.users.filter(el =>
    //     ((filterState.filter_name?.length  && el.name.includes(filterState.filter_name)) || !filterState.filter_name?.length ) &&
    //     ((filterState.filter_id?.length  && el.id==filterState.filter_id) || !filterState.filter_id?.length )),filterState)



    return(
        <div>

            <Form
                wrapperCol={{
                    span: 4,
                }}

                onValuesChange={onFinish}
                onFinish={onFinish}
            >

                <Form.Item
                    label="Filter Name"
                    name="filter_name"
                     rules={[
                        {

                        },
                    ]}
                >
                    <Input.Search  />
                </Form.Item>
                <Form.Item
                    label="Filter Id"
                    name="filter_id"
                    rules={[
                        {
                        },
                    ]}
                >
                    <Input.Search  />
                </Form.Item>

            </Form>
                <List
                    itemLayout="horizontal"
                    dataSource={redux.users.filter(el =>
                        ((filterState.filter_name?.length  && el.name.includes(filterState.filter_name)) || !filterState.filter_name?.length ) &&
                        ((filterState.filter_id?.length  && el.id==filterState.filter_id) || !filterState.filter_id?.length))}
                    renderItem={(item) => (
                        <List.Item>

                                <List.Item.Meta
                                    avatar={<UserImage id={item.image_id} />}
                                    description={<Link to={`/users/${item.id}`}>{item.name} {item.id} </Link> }
                                    title={<button onClick={()=>onMessage(item)}>Messages</button>}
                                />
                            <Popconfirm title="Are you sure delete this task?" okText="Yes" cancelText="No">
                                <Button>Confirm</Button>
                            </Popconfirm>
                        </List.Item>
                    )}
                />
        </div>
    )
}

export {Users}