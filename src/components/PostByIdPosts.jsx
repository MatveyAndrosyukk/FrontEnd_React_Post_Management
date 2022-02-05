import React from 'react';
import Loader from "./UI/loader/Loader";

const PostByIdPosts = ({isPostLoading, post, postError}) => {
    return (
        <div>
            {isPostLoading &&
                <Loader/>}

            {postError
                ? <h2>{postError}</h2>
                : <div style={{marginTop: 20}}>
                    <h2>{post.id}. {post.title}</h2>

                    <div>
                        {post.body}
                    </div>
                </div>}

        </div>

    );
};

export default PostByIdPosts;