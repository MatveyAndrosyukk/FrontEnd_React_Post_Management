import React from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({create, post, setPost}) => {


    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({id: 0, title: '', body: ''})
    }

    return (
        <div>
            <form>
                {/*Управляемый компонент*/}
                <MyInput
                    value={post.title}
                    onChange={event => setPost({...post, title: event.target.value})}
                    type='text'
                    placeholder='Название поста'
                />
                <MyInput
                    value={post.body}
                    onChange={event => setPost({...post, body: event.target.value})}
                    type='text'
                    placeholder={'Описание поста'}
                />
                <MyButton onClick={addNewPost}>Создать пост</MyButton>
            </form>

            <hr style={{margin : '15px, 0'}}/>
        </div>

    );
};

export default PostForm;