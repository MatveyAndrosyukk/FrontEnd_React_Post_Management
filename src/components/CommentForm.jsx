import React from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const CommentForm = ({addCommentary, comment, setComment, isInputFilled}) => {
    return (
        <div style={{marginTop: 50, marginBottom: 20}}>
            <h4>Добавить комментарий</h4>
            {isInputFilled &&
                <div style={{color: 'firebrick'}}>Вы не заполнили необходимые поля</div>
            }
            <form onSubmit={addCommentary}>
                <MyInput
                    value={comment.email}
                    onChange={e => setComment({...comment, email: e.target.value})}
                    style={{width: 200}}
                    placeholder="Введите email-адрес"
                />
                <MyInput
                    value={comment.body}
                    onChange={e => setComment({...comment, body: e.target.value})}
                    style={{height: 100}}
                    placeholder="Введите текст комментария"
                />
                <MyButton style={{outline: "none"}}>Отправить комментарий</MyButton>
            </form>
        </div>
    );
};

export default CommentForm;