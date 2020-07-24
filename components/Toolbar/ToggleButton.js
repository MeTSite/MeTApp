import React from 'react';

import '../styles.css';

const Toggle = (props) => {
  return (
    <button className="toggle" onClick={props.click}>
      <span className="toggle__line"></span>
      <span className="toggle__line"/>
      <span className="toggle__line"/>
    </button>
  )
}

export default Toggle;