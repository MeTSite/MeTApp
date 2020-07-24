import React from 'react';

import '../styles.css';

const SideBar =(props)=>{
  let sideBarClasses = ['sidebar'];
  if(props.show){
    sideBarClasses= ['sidebar', 'open'];
  }
  return (
    <nav className={sideBarClasses.join(' ')}>
      <ul>
        <li><a href="/">Met Camp</a></li>
        <li><a href="/">Blog</a></li>
        <li><a href="/">Noticias</a></li>
        <li><a href="/">Nosotras</a></li>
      </ul>
    </nav>
  );
};

export default SideBar;