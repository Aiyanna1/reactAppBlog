import { useState } from "react";
import Posts from "../Posts/Posts";
import "./Blog.css"

function Blog (props) {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setPosts([...posts, { title, text }]);
    setTitle('');
    setText('');
  };

  return (
    <div className="write">
      <form className="write__form" onSubmit={handleSubmit}>
        <div className="write__group">
          <input 
            type="text" 
            placeholder="title" 
            className="write__input" 
            autoFocus={true} 
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          /> 
        </div>
        <div className="write__group">
          <textarea 
            placeholder="How Pink are you..." 
            type="text" 
            className="write__input --text"
            value={text}
            onChange={(event) => setText(event.target.value)}
          />
        </div>
        <button className="write__submit">Post</button>
      </form>
      <Posts posts={posts} />
    </div>
  );
}

export default Blog;


