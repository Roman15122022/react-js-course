import React, {useState} from 'react';
import MyButton from "./UI/button/MyButton";

const PostItem = (props) => {
    return (
        <div className='post'>
            <div className='post__content'>
                <strong>{props.post.id}. {props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
            </div>
            <MyButton onClick={() => props.remove(props.post.id)}>Delete</MyButton>
        </div>
    );
};

export default PostItem;
