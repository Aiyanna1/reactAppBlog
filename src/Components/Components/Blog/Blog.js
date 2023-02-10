import { useState } from "react";
import "./Blog.css"

function Blog (props) {
    return (
        <div className="write">
            <form className="write__form">
                <div className="write__group">
                  <input type="text" placeholder="title" className="write__input" autoFocus={true}></input> 
                </div>
                <div className="write__group">
                    <textarea placeholder="How Pink are you..." type="text" className="write__input --text"></textarea>
                </div>
                <button className="write__submit">Post</button>
            </form>
        </div>
    )
    
}

export default Blog;