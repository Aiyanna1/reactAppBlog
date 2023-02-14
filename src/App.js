import React, { useEffect, useState } from 'react';
import TopBar from './Components/Components/TopBar/TopBar';
import Header from './Container/Header/Header';
import Posts from './Components/Components/Posts/Posts';
import Blog from './Components/Components/Blog/Blog';
import Searchbar from './Container/Searchbar/Searchbar';
import Login from './Container/Login/login';
import "./App.css";

const users = [
  { username: 'Aiyanna', password: '123456' },
  { username: 'Adele', password: 'burningbridges' }
];

function App() {
  const [theme, setTheme ] = useState ("light");
  const [posts, setPosts] = useState([
    { title: "Pink is beautiful", text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe maxime exercitationem aliquid sapiente quis distinctio illo officiis quasi facere itaque!" },
    { title: "Sakura Blossoms", text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe maxime exercitationem aliquid sapiente quis distinctio illo officiis quasi facere itaque!" },
    { title: "Sailor Moon", text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe maxime exercitationem aliquid sapiente quis distinctio illo officiis quasi facere itaque!" }
  ]);
  const [user, setUser] = useState(null);

  useEffect (()=>{document.body.className=theme}); 

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const addPost = (post) => {
    setPosts([...posts, post]);
  };

  if (!user) {
    return <Login onLogin={setUser} />;
  }

  return (
    <>
      <TopBar />
      <Searchbar />
      <Header theme={theme} setTheme={setTheme} />
      <Posts posts={posts} />
      <Blog addPost={addPost} />
    </>
  );
}

export default App;