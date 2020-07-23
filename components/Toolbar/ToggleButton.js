import React from 'react';

import '../styles.css';

const Toggle = () => {
  return (
    <button className="toggle">
      <span className="toggle__line"></span>
      <span className="toggle__line"/>
      <span className="toggle__line"/>
    </button>
  )
}

export default Toggle;