import React from 'react';
import cl from './MyModal.module.css';

const MyModal = ({children, visible, setVisible, setPost}) => {
    const classes = [cl.myModal]

    if (visible) {
        classes.push(cl.active)
    }

    const changeModal = () => {
        setVisible(false)
        setPost({id: 0, title: '', body: ''})
    }

    return (
        <div
            className={classes.join(' ')}
            onClick={changeModal}
        >
            <div
                className={cl.myModalContent}
                onClick={e => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
};

export default MyModal;