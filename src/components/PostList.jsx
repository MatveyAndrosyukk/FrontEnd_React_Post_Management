import React from 'react';
import PostItem from "./PostItem";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import Loader from "./UI/loader/Loader";

const PostList = ({posts, title, remove, isPostLoading, postError}) => {
    if (postError) {
        return (
            <h1 style={{textAlign: 'center'}}>
                {postError}
            </h1>
        )
    }

    return (
        <div>
            <div className="App">
                {isPostLoading &&
                    <div
                        style={{display: 'flex', justifyContent: 'center', marginTop: 50}}
                    >
                        <Loader/>
                    </div>
                }

                <h2 style={{textAlign: 'center'}}>
                    {title}
                </h2>

                <TransitionGroup className="todo-list">
                    {posts.map((post, index) =>
                        <CSSTransition
                            key={post.id}
                            timeout={500}
                            classNames="post"
                        >
                            <PostItem
                                remove={remove}
                                number={index + 1}
                                post={post}
                                key={post.id}
                            />
                        </CSSTransition>
                    )}
                </TransitionGroup>
            </div>
        </div>
    );
};

export default PostList;