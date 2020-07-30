import React from 'react';
import Link from 'next/link';

const MetCamp = (props) => {
  return(
    <div className="bg-red-100 my-6 rounded border-gray-100 shadow-md flex justify-between items-center">
    <div class="w-2/12 mx-8">
      <img alt={props.imgAlt} src={props.imgPath} />
    </div>
      <div className="w-8/12 mx-8">
        <h1 className="font-mono text-2xl">{props.title}</h1>
        <h3>{props.description}</h3>
      </div>
      <div className="w-1/12"> 
        <Link href={props.metcampPath}><h1 className="font-mono text-5xl text-gray-600 cursor-pointe cursor-pointer"><a>></a></h1></Link>
      </div>
    </div>
  );
};

export default MetCamp;
