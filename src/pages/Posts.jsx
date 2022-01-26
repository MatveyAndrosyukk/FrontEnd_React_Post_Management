import React, {useEffect, useState} from "react";
import {usePosts} from "../components/hooks/usePosts";
import {useFetching} from "../components/hooks/useFetching";
import PostService from "../service/PostService";
import {getTotalPages} from "../utils/pages";
import MyButton from "../components/UI/button/MyButton";
import MyModal from "../components/UI/modal/MyModal";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import PostList from "../components/PostList";
import Pagination from "../components/UI/pagination/Pagination";
import Loader from "../components/UI/loader/Loader";



function Posts() {
    const [posts, setPosts] = useState([])
    const [post, setPost] = useState({id: 0,title: '', body: ''})
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
    const [totalPages, setTotalPages] = useState(0)
    const [limit] = useState(10)
    const [page, setPage] = useState(1)
    const [fetchPosts, isPostLoading, postError] = useFetching(async (limit, page) => {
        const response = await PostService.getAllPosts(limit, page)
        setPosts(response.data)
        const totalCount = response.headers['x-total-count']
        console.log(response.headers['x-total-count'])
        setTotalPages(getTotalPages(totalCount, limit))
    })

    useEffect(() => {
        fetchPosts(limit, page)
    }, [page, limit])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    const deletePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
        <div className={'App'}>
            <MyButton
                style={{marginTop: 15}}
                onClick={() => setModal(true)}
            >
                Создать пост
            </MyButton>

            <MyModal
                visible={modal}
                setVisible={setModal}
                setPost={setPost}
            >

                <PostForm
                    post={post}
                    setPost={setPost}
                    create={createPost}
                />

            </MyModal>

            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />

            {postError &&
                <h1>Произошла ошибка ${postError}</h1>
            }

            <PostList
                isPostLoading={isPostLoading}
                remove={deletePost}
                posts={sortedAndSearchedPosts}
                title={"Список постов"}
            />

            {isPostLoading &&
                <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}>
                    <Loader/>
                </div>}

            <Pagination
                totalPages={totalPages}
                page={page}
                setPage={setPage}
            />
        </div>

    );
}

export default Posts;
