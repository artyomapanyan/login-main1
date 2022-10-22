
import { Avatar, Button, Comment, Form, Input, List } from 'antd';
import moment from 'moment';
import React, {useRef, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import UserImage from "../Fragments/UserImage";
const { TextArea } = Input;


function Comments({User}){
    let redux = useSelector((state) => state)
    console.log("commm",User)
    let dispatch = useDispatch()
    const formRef = useRef();




    const handleSubmit = (values) => {
        formRef.current.resetFields()
            dispatch({
                type:'NEW_COMMENT',
                payload:{
                    ...values,
                    authId: redux.auth.user.id,
                    userId: User.id
                }
            });


}


    return (
        <>
            {redux.comments.length > 0 && <List
                dataSource={redux.comments}
                header={`${redux.comments.length} ${redux.comments.length > 1 ? 'replies' : 'reply'}`}
                itemLayout="horizontal"
                renderItem={(comment) => <Comment   author={comment.author??redux.auth.user.name}
                                                  avatar={comment.avatar??<UserImage id={redux.auth.user.image_id} />}
                                                  content={comment.comment??'dsadas'}
                                                  datetime={moment().format('DD-MM-YYYY')} />}
            />}
            <Comment
                avatar={<Avatar src={<UserImage id={redux.auth.user.image_id} />} alt="Han Solo" />}
                content={
                <Form onFinish={handleSubmit} ref={formRef}>

                    <Form.Item name={'comment'} rules={[
                        {
                            required:true
                        }
                    ]}>
                        <TextArea rows={4}  />
                    </Form.Item>
                    <Form.Item>
                    <Button htmlType="submit" type="primary">
                    Add Comment
                    </Button>
                    </Form.Item>
                </Form>
                }
            />
        </>
    );
};


export {Comments}