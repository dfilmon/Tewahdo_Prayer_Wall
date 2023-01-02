import React from 'react';
import {useState} from 'react'

import './prayer.css';

function Prayer(props) {

  let randomNumber = Math.floor(Math.random() * 1000)
  let randomImage = 'https://source.unsplash.com/random/200x200?sig='+randomNumber;



  return (
    <div className="prayer_container w-full overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
      {/* <img
        class="object-cover w-full h-56"
        src={randomImage}
        alt="avatar"
      /> */}

      <div className="prayer_text py-5 text-center">
        {/* {prayers.map((prayers) => (
          <div>{prayers.prayer}</div>
        ))} */}
        <h1 className='prayer_text'>{props.prayer}</h1>
        <p>{props.prayedFor}</p>
      </div>
    </div>
  );
}

export default Prayer;
