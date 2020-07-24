import React from 'react';

import '../styles.css';

const Blackdrop = (props) => {
  return (
    <div className="backdrop" onClick={props.click}/>
  );
};

export default Blackdrop;