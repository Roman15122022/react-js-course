import React, {useState} from 'react';

const PostItem = (props) => {
    return (
        <div className='post'>
            <div className='post__content'>
                <strong>{props.post.id} {props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
            </div>
            <button>Delete post</button>
        </div>
    );
};

export default PostItem;
