import React from 'react';
import classes from "./MyModal.module.css";

const MyModal = ({children, visible, setVisible, setPost}) => {
    const rootClasses = [classes.myModal]

    if (visible){
        rootClasses.push(classes.active)
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => {
            setVisible(false)
            setPost({id: 0,title: '', body: ''})
        }}>
            <div className={classes.myModalContent} onClick={(event) => event.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default MyModal;