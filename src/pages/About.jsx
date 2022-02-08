import React, {useEffect} from 'react';

const About = () => {
    useEffect(() => {
        document.title = "Post Service: About"
    }, [])

    return (
        <div>
            <h1>React-Router-Dom работает!</h1>
        </div>
    );
};

export default About;