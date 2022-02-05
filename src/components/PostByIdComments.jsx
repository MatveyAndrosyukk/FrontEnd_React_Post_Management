import React from 'react';
import Loader from "./UI/loader/Loader";

const PostByIdComments = ({isCommentLoading, comments, commentError}) => {
    return (
        <div>
            <div style={{marginTop: 50}}>
                <h2>
                    Комментарии:
                </h2>
                {isCommentLoading &&
                    <Loader/>}

                {commentError
                    ? <h2>{commentError}</h2>
                    : <div>
                        {comments.map(comm =>
                            <div key={comm.id} style={{marginTop: 15}}>
                                <h6>{comm.email}</h6>
                                <div className="post">{comm.body}</div>
                            </div>
                        )}
                    </div>}
                <div style={{height: 10}}/>
            </div>
        </div>
    );
};

export default PostByIdComments;