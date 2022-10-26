import {Avatar, Button, Comment, Form, Input, List, Tooltip} from "antd";
import UserImage from "../Fragments/UserImage";
import React, {useEffect, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import moment from "moment/moment";
import { CheckCircleTwoTone } from '@ant-design/icons';

const {TextArea} = Input;


function Messages() {
    let redux = useSelector((state) => state)
    let dispatch = useDispatch();
    const formRef = useRef();
    let params = useParams();
    let userComments = redux.messages.filter((el) =>(el.authId == redux.auth.user.id && el.userId == params.id )|| (el.authId == params.id && redux.auth.user.id == el.userId));

    const onFinish = (values) => {
        formRef.current.resetFields()
        dispatch({
            type: 'NEW_MESSAGE',
            payload: {
                ...values,
                authId: redux.auth.user.id,
                userId: +params.id,
                date: moment().format('DD-MM-YYYY HH:mm:ss'),
                id: Math.floor(Math.random() * (1000000 - 1 + 1)) + 1,
                read_at: null
            }
        })
    }
    useEffect(()=>{
        userComments.forEach(comment=>{
            if(comment.authId!=redux.auth.user.id){
                dispatch({
                    type:'COMMENT_READ',
                    payload:comment.id
                })
            }
        })
    },[])




    return(
        <div>
            {userComments.length > 0 && <List
                dataSource={userComments}
                header={`${userComments.length} ${userComments.length > 1 ? 'replies' : 'reply'}`}
                itemLayout="horizontal"
                renderItem={(message) => {
                    let messagetUser = redux.users.find(e => e.id === message.authId)
                    return <Comment
                                     author={messagetUser.name}
                                     avatar={<UserImage id={messagetUser.image_id}/>}
                                    content={message.message}
                                     children={message.read_at?<CheckCircleTwoTone twoToneColor="#52c41a" />:null}
                                    datetime={message.date}/>
                }}
            />}
            <Comment
                avatar={<Avatar src={<UserImage id={redux.auth.user.image_id}/>} alt="Han Solo"/>}
                content={
                    <Form onFinish={onFinish} ref={formRef}>

                        <Form.Item
                            name={'message'}
                            rules={[
                            {
                                required: true
                            }
                        ]}>

                            <TextArea rows={4}/>
                        </Form.Item>
                        <Form.Item>

                            <Button htmlType="submit" type="primary">Message</Button>
                        </Form.Item>
                    </Form>
                }
            />
        </div>
    )
}
export {Messages}