import TopBar from './Components/Components/TopBar/TopBar';
import Header from './Container/Header/Header';
import Posts from './Components/Components/Posts/Posts';
import Blog from './Components/Components/Blog/Blog';
import Searchbar from './Container/Searchbar/Searchbar';
import { useEffect, useState } from 'react';
import "./App.css";


function App() {
  const [theme, setTheme ] = useState ("light");
  useEffect (()=>{document.body.className=theme}); 
  return (
    <>
    <TopBar/>
    <Searchbar/>
    <Header theme={theme} setTheme={setTheme}/>
    <Posts/>
    <Blog/>
    </>
  );
}

export default App;
