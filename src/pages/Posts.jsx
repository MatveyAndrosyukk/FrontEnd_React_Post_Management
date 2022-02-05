import React, {useEffect, useRef, useState} from "react";
import {usePosts} from "../hooks/usePosts";
import {useFetching} from "../hooks/useFetching";
import PostService from "../service/PostService";
import {getTotalPages} from "../utils/pages";
import {useObserve} from "../hooks/useObserve";
import MyButton from "../components/UI/button/MyButton";
import MyModal from "../components/UI/modal/MyModal";
import PostForm from "../components/PostForm";
import FilterPost from "../components/FilterPost";
import PostList from "../components/PostList";
import '../styles/App.css'

function Posts() {
    const [posts, setPosts] = useState([])
    const [post, setPost] = useState({id: 0, title: '', body: ''})
    const [filter, setFilter] = useState({sort: '', query: ''})
    const searchedAndSortedPosts = usePosts(filter, posts)
    const [modal, setModal] = useState(false)
    const [limit] = useState(10)
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)
    const lastElement = useRef()
    const [isPostLoading, postError, fetchPosts] = useFetching(async (limit, page) => {
        const response = await PostService.getPosts(limit, page)
        setPosts([...posts, ...response.data])
        const xTotalCount = response.headers['x-total-count']
        setTotalPages(getTotalPages(xTotalCount, limit))
    })


    useEffect(() => {
        fetchPosts(limit, page)
    }, [page])

    useObserve(isPostLoading, page !== totalPages, lastElement, () => {
        setPage(page + 1)
    })



    const createPost = (newPost) => {
        setPosts([...posts, newPost])

    }

    const deletePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
        <div className={'App'}>
            <MyButton
                onClick={() => setModal(true)}
            >
                Добавить пост
            </MyButton>
            <MyModal
                visible={modal}
                setVisible={setModal}
                setPost={setPost}
            >
                <PostForm
                    setVisible={setModal}
                    create={createPost}
                    post={post}
                    setPost={setPost}
                />
            </MyModal>

            <div>
                <FilterPost
                    filter={filter}
                    setFilter={setFilter}
                />


                <PostList
                    remove={deletePost}
                    posts={searchedAndSortedPosts}
                    title={"Список постов"}
                    isPostLoading={isPostLoading}
                    postError={postError}
                />
                <div ref={lastElement}
                     style={{height: 20}}
                />
            </div>

        </div>
    );
}

export default Posts;
