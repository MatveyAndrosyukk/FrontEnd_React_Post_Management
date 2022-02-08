import React, {useEffect, useRef, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import PostService from "../service/PostService";
import PostByIdPosts from "../components/PostByIdPosts";
import PostByIdComments from "../components/PostByIdComments";
import CommentForm from "../components/CommentForm";

const PostByIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const [comment, setComment] = useState({email: '', body: ''})
    const [isInputFilled, setIsInputFilled] = useState(false)
    const [isPostLoading, postError, fetchPostById] = useFetching(async (id) => {
        const response = await PostService.getPostById(id)
        setPost(response.data)
    })
    const [isCommentLoading, commentError, fetchCommentById] = useFetching(async (id) => {
        const response = await PostService.getCommentsByPostId(id)
        setComments(response.data)
    })

    useEffect(() => {
        fetchPostById(params.id)
        fetchCommentById(params.id)
        document.title = "Post Service: Post №" + params.id
    }, [])

    const addCommentary = e => {
        e.preventDefault()
        if (!comment.email || !comment.body) {
            setIsInputFilled(true)
            return
        }
        PostService.addCommentToPost(comment, params.id)
        setComments([...comments, comment])
        setComment({email: '', body: ''})
        setIsInputFilled(false)
    }

    const deleteComment = (commentId)=>{
        PostService.deleteCommentByPostId(params.id, commentId)
        setComments(comments.filter(comm => comm.id !== commentId))
    }



    return (
        <div className="App">
            <PostByIdPosts
                isPostLoading={isPostLoading}
                post={post}
                postError={postError}
            />

            <PostByIdComments
                isCommentLoading={isCommentLoading}
                comments={comments}
                commentError={commentError}
                deleteComment={deleteComment}

            />

            <CommentForm
                addCommentary={addCommentary}
                comment={comment}
                setComment={setComment}
                isInputFilled={isInputFilled}
            />
        </div>
    );
};

export default PostByIdPage;