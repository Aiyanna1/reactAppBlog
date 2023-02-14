import React from 'react';
import "./Posts.css"

function Posts (props) {
    return (
        <ul className="post">
            {props.posts.map((post, index) => (
                <li key={index} className="post__list"> 
                    <h1 className="post__title">{post.title}</h1>
                    <p className="post__text">{post.text}</p>
                </li>
            ))}
        </ul>
    );      
}

export default Posts;