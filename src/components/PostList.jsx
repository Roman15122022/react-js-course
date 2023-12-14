import React from 'react';
import PostItem from "./PostItem";

const PostList = ({ posts, title, remove }) => {
    if (!posts.length){
        return (
            <h1 style={{textAlign: "center"}}>
                List empty!
            </h1>
        )
    }
    return (
        <div>
            <h1 style={{ textAlign: "center", marginTop: '15px' }}>
                {title}
            </h1>
            {posts.map((post, index) => (
                <PostItem remove={remove} number={index + 1} post={post} key={post.id} />
            ))}

        </div>
    );
};

export default PostList;
