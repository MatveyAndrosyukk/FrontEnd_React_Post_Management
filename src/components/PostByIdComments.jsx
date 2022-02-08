import React, {useState} from 'react';
import Loader from "./UI/loader/Loader";
import MyButton from "./UI/button/MyButton";

const PostByIdComments = ({isCommentLoading, comments, commentError, deleteComment}) => {
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
                            <div key={comm.id}>
                                <h6>{comm.email}</h6>
                                <div>
                                    <div className="post">{comm.body}</div>
                                    <MyButton
                                        style={{border: 0, marginLeft: 735, color: 'firebrick'}}
                                        onClick={()=> deleteComment(comm.id)}
                                        >
                                        Удалить
                                    </MyButton>
                                </div>
                            </div>
                        )}
                    </div>}
                <div style={{height: 10}}/>
            </div>
        </div>
    );
};

export default PostByIdComments;