import React, {useEffect, useState} from "react";
import "./styles/App.css"
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/modal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import {usePosts} from "./components/hooks/usePosts";
import PostService from "./service/PostService";


function App() {
    const [posts, setPosts] = useState([])

    const [post, setPost] = useState({id: 0,title: '', body: ''})
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
    const [isPostLoading, setIsPostLoading] = useState(false)

    useEffect(() => {
        setIsPostLoading(true)
        PostService.getPosts().then((res) => {
            setPosts(res.data)

        })
        setIsPostLoading(false)
    }, [])

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
                  {isPostLoading
                      ?
                      <h1
                          style={{textAlign: 'center'}}
                      >
                          Идет загрузка...
                      </h1>
                      :
                      <PostList
                          remove={deletePost}
                          posts={sortedAndSearchedPosts}
                          title={"Список постов"}
                      />
                  }



          </div>
      );
}

export default App;
