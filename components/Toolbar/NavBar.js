import React from 'react';
import ToggleButton from './ToggleButton';
import '../styles.css';

const Toolbar = (props) => {
  return (
    <header className="toolbar">
      <nav className="toolbar__navigation">
        <div>
          <ToggleButton />
        </div>
        <div className="toolbar__logo"><a href="/">MeT Logo</a></div>
        <div className="spacer" />
        <div className="toolbar__navigation-items">
          <ul>
            <li>
              <a hfef="/" exact>MeT Camp</a>
            </li>
            <li>
              <a hfer="#">Blog</a>
            </li>
            <li>
              <a href="#">Noticias</a>
            </li>
            <li>
              <a href="#">Nosotras</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Toolbar;