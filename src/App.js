import React, {useState} from "react";
import "./styles/App.css"
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";


function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Java', body: 'Description'},
        {id: 2, title: 'JavaScript', body: 'Description'},
        {id: 3, title: 'HTML', body: 'Description'}
    ])

    const [selectedSort, setSelectedSort] = useState('')

    /*useEffect(() => {
        PostService.getPosts().then((res) => {
            setPosts(res.data)
        })
    })*/

    const sortPosts = (sort) => {
        setSelectedSort(sort)
        setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
    }

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const deletePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

  return (
      <div className={'App'}>
          <PostForm create={createPost}/>

          <hr style={{margin : '15px, 0'}}/>

          <MySelect
              value={selectedSort}
              onChange={sortPosts}
              defaultValue={"Сортировать по"}
              options={[{value: 'title', name: 'По названию'},
                        {value: 'body', name: 'По описанию'}]}
          />
          {posts.length !== 0
            ?
              <PostList remove={deletePost} posts={posts} title={"Список постов"}/>
            :
              <h1 style={{textAlign: 'center'}}>
                  Посты не найдены!
              </h1>}

      </div>
  );
}

export default App;
