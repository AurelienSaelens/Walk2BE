import React from 'react';
import Content from '../../components/Content/Content';
import Parallax from '../../components/Parallax/Parallax';
import Topbar from '../../components/Topbar/Topbar';
import Login from '../Login/Login';


function Home() {
  return (
    <div className="homeContainer">
      <Topbar />
      <Parallax/>
      <Content />
    </div>

    
);
}

export default Home;
