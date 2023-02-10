import "./Posts.css"

function Posts (props) {
    return (
        <ul className="post">
             <li className="post__list"> 
                    <h1 className="post__title">Pink is beautiful</h1>
                    <p className ="post__text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe maxime exercitationem aliquid sapiente quis distinctio illo officiis quasi facere itaque!</p>
            </li>
            <li className="post__list">
                    <h1 className="post__title">Sakura Blossoms</h1>
                    <p className ="post__text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe maxime exercitationem aliquid sapiente quis distinctio illo officiis quasi facere itaque!</p>
            </li>
            <li className="post__list">
                    <h1 className="post__title">Sailor Moon</h1>
                    <p className ="post__text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe maxime exercitationem aliquid sapiente quis distinctio illo officiis quasi facere itaque!</p>
            </li>
        </ul>
                
         )      
}

export default Posts;