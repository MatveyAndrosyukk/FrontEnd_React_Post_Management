import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../components/hooks/useFetching";
import PostService from "../service/PostService";
import Loader from "../components/UI/loader/Loader";

const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getPostById(id)
        setPost(response.data)

    })
    const [fetchCommentByPostId, isCommentLoading, commentError] = useFetching(async (id) => {
        const response = await PostService.getCommentsByPostId(id)
        setComments(response.data)

    })

    useEffect(() => {
        fetchPostById(params.id)
        fetchCommentByPostId(params.id)
    },[])

    return (
        <div>
            {error
                ? <h1 style={{textAlign: 'center'}}>{error}</h1>
                : isLoading
                ? <Loader/>
                : <div className="post">
                        <h1>{post.id}. {post.title}</h1>
                 </div>}

            <h3>
                Комментарии:
            </h3>

            {commentError
                ? <h1 style={{textAlign: 'center'}}>{commentError}</h1>
                : isCommentLoading
                ? <Loader/>
                : <div>
                        {comments.map(comm =>
                            <div key={comm.id}
                                 style={{marginTop: 15}}
                            >
                                <h5>{comm.email}</h5>
                                <div>{comm.body}</div>
                            </div>
                        )}
                    </div>}
        </div>
    );
};

export default PostIdPage;