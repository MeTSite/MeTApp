import React from 'react';
import ToggleButton from './ToggleButton';
import Link from 'next/link';
import '../styles.css';

const Toolbar = (props) => {
  return (
    <header className="toolbar">
      <nav className="toolbar__navigation">
        <div className="toolbar__navigation-button">
          <ToggleButton click={props.toggleClick}/>
        </div>
        <div className="toolbar__logo"><Link href="/"><a>MeT Logo</a></Link></div>
        <div className="spacer" />
        <div className="toolbar__navigation-items">
          <ul>
            <li>
              <Link href="/metcamps/MetCamps"><a>MeT Camps</a></Link>
            </li>
            <li>
              <Link href="#"><a>Blog</a></Link>
            </li>
            <li>
              <Link href="#"><a>Noticias</a></Link>
            </li>
            <li>
              <Link href="#"><a>Nosotras</a></Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Toolbar;
