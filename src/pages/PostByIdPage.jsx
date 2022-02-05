import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import PostService from "../service/PostService";
import PostByIdPosts from "../components/PostByIdPosts";
import PostByIdComments from "../components/PostByIdComments";

const PostByIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
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
    }, [])


    return (
        <div className="App">
            <PostByIdPosts isPostLoading={isPostLoading} post={post} postError={postError}/>

            <PostByIdComments isCommentLoading={isCommentLoading} comments={comments} commentError={commentError}/>
        </div>
    );
};

export default PostByIdPage;