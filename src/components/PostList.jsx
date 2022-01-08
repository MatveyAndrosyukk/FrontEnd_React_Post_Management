import React from 'react';
import PostItem from "./PostItem";

const PostList = ({posts, title}) => {
    return (
        <div>
            <div className="App">
                <h1 style={{textAlign: 'center'}}>
                    {title}
                </h1>
                {posts.map(post =>
                    <PostItem post={post} key={post.id}/>)}
            </div>
        </div>
    );
};

export default PostList;