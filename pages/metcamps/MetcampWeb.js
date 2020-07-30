import React from 'react';

import NavBar from '../../components/Toolbar/NavBar';
import '../styles/metcamps.css'

const MetCampUXUI = () => {
  return (
    <div className="bg-grad-muted-gray w-full h-screen flex flex-col items-center justify-center">
      <NavBar />
      <h1 className="font-mono text-center text-3xl mt-1 p-3 pt-1 ">Metcamp Web</h1>
      <div className="w-3/4">
        <p className="font-mono">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu scelerisque lectus. Quisque volutpat mi sit amet interdum sagittis. Nulla efficitur, magna in molestie vehicula, tortor magna scelerisque risus, a porta eros sem sed mi. Pellentesque vestibulum dui orci, in tempor ligula feugiat eu. Duis congue arcu a mollis varius. Aliquam id sem quis lacus aliquam blandit quis eu nibh. Curabitur sodales risus eu augue volutpat, quis consectetur lacus tincidunt. </p>
        
      </div>
    </div>  
  )
};

export default MetCampUXUI;
