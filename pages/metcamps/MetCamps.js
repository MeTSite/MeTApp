import React from 'react';
import NavBar from '../../components/Toolbar/NavBar';
import SideBar from '../../components/Toolbar/SideBar';
import Backdrop from '../../components/Toolbar/Backdrop';
import MetCamp from '../../components/Metcamp/MetCamp.js';
import '../styles/metcamps.css'

const MetCamps = () => {
  return (
    <div className="bg-grad-muted-gray w-full h-screen flex flex-col items-center justify-center">
      <NavBar />
      <h1 className="font-mono text-center text-3xl mt-1 p-3 pt-1 ">Metcamps!</h1>
      <div className="w-3/4">
        <MetCamp className="" 
          title="MetCamp UX/UI" 
          description="Curso intensivo on line orientado al diseño de soluciones UX/UI centrado en las personas usuarias"
          imgPath="/assets/uxui.svg"
          imgAlt="icono-ux-ui"
          metcampPath="/metcamps/MetcampUXUI"
        />
        <MetCamp className="" 
          title="MetCamp Web" 
          description="Bootcamp de iniciación a la programación Web desde el front" 
          imgAlt="icono-web-development"
          imgPath="/assets/webdev.svg"
          metcampPath="/metcamps/MetcampWeb"
        />
      </div>
    </div>  
  )
};

export default MetCamps;
