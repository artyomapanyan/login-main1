import {Avatar, Button, Comment, Form, Input, List, Tooltip} from 'antd';
import moment from 'moment';
import React, {useRef, useState, createElement} from 'react';
import {useDispatch, useSelector} from "react-redux";
import UserImage from "../Fragments/UserImage";
import {DeleteOutlined, DislikeFilled, EditOutlined, LikeFilled, LikeOutlined} from '@ant-design/icons';

const {TextArea} = Input;


function TrashOutlined() {
    return null;
}

function Comments({User}) {
    let redux = useSelector((state) => state)
    let dispatch = useDispatch()
    const formRef = useRef();

    const [isUpdate, setIsUpdate] = useState(false);



    const handleSubmit = (values) => {
        console.log(values, isUpdate)
        formRef.current.resetFields()

        !isUpdate ? dispatch({
            type: 'NEW_COMMENT',
            payload: {
                ...values,
                authId: redux.auth.user.id,
                userId: User.id,
                id: Math.floor(Math.random() * (1000000 - 1 + 1)) + 1,
                like: [],
                date: moment().format('DD-MM-YYYY HH:mm:ss'),
                updateId: false
            }
        }) : dispatch({
            type: 'UPDATE_COMMENT',
            payload: {
                ...isUpdate,
                comment: values.comment,
                date: moment().format('DD-MM-YYYY HH:mm:ss'),
                updateId: true
            }
        });
        setIsUpdate(false)

    }


    const onLike = (comment) => {
        dispatch({
            type: 'LIKE',
            payload: {
                id: comment.id,
                userId: redux.auth.user.id
            }
        });
    };

    const onDisLike = (comment) => {
        dispatch({
            type: 'DIS_LIKE',
            payload: {
                id: comment.id,
                userId: redux.auth.user.id
            }
        });
    }

    const onDeleteComment = (comment) => {
        dispatch({
            type: 'DELETE_COMMENT',
            payload: {
                id: comment.id
            }
        });
    }

    const onUpdateComment = (comment) => {
        console.log(comment)
        formRef.current.setFieldsValue({
            comment: comment.comment,
        })
        setIsUpdate(comment)
    }

    //comment.like.includes(redux.auth.user.id)
    let userComments = redux.comments.filter(el => User.id === el.userId)
    return (
        <>
            {userComments.length > 0 && <List
                dataSource={userComments}
                header={`${userComments.length} ${userComments.length > 1 ? 'replies' : 'reply'}`}
                itemLayout="horizontal"
                renderItem={(comment) => {
                    let commentUser = redux.users.find(e => e.id === comment.authId)
                    return <Comment author={commentUser.name}
                                    avatar={<UserImage id={commentUser.image_id}/>}
                                    children={
                                        <Tooltip key="comment-basic-like" title="Like">
                                            <button
                                                onClick={() => comment.like.includes(redux.auth.user.id) ? onDisLike(comment) : onLike(comment)}>
                                                {comment.like.includes(redux.auth.user.id) ? <LikeFilled/> :
                                                    <LikeOutlined/>}
                                                <span className="comment-action">{comment.like.length}</span>
                                            </button>
                                            <button onClick={() => onDeleteComment(comment)}>
                                                <DeleteOutlined/>
                                            </button>
                                            <button onClick={() => onUpdateComment(comment)}>
                                                <EditOutlined/>
                                            </button>
                                            <p>{comment.updateId ? "updeted" : ""}</p>
                                        </Tooltip>
                                    }
                                    content={comment.comment ?? 'dsadas'}
                                    //moment().format('DD-MM-YYYY HH:mm:ss')
                                    datetime={comment.date}/>
                }}
            />}

            <Comment
                avatar={<Avatar src={<UserImage id={redux.auth.user.image_id}/>} alt="Han Solo"/>}
                content={
                    <Form onFinish={handleSubmit} ref={formRef}>

                        <Form.Item
                            name={'comment'} rules={[
                            {
                                required: true
                            }
                        ]}>

                            <TextArea rows={4}/>
                        </Form.Item>
                        <Form.Item>

                            <Button htmlType="submit" type="primary">{isUpdate ? "update" : "Add Comment"}</Button>
                        </Form.Item>
                    </Form>
                }
            />
        </>
    );
};


export {Comments}