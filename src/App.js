import React, {useEffect, useState} from "react";
import "./styles/App.css"
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostService from "./service/PostService";


function App() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        PostService.getPosts().then((res) => {
            setPosts(res.data)
        })
    })

    const [title, setTitle] = useState('')

    const addNewPost = (e) => {
        e.preventDefault()
    }

  return (
      <div className={'App'}>
      <form>
          <MyInput
              value = {title}
              onChange={event => setTitle(event.target.value)}
              type='text'
              placeholder='Название поста'
          />
          <MyInput type='text' placeholder={'Описание поста'}/>
          <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
      <PostList posts={posts} title={"Список постов"}/>
      </div>
  );
}

export default App;
