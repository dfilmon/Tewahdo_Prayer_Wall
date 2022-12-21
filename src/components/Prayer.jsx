import React from 'react';
import { useState, useEffect } from 'react';
import { db } from '../firebase';
import { query, collection, onSnapshot } from 'firebase/firestore';


function Prayer() {

  const [prayers, setPrayers] = useState([])

  useEffect(() => {


    const q = query(collection(db, 'Prayers'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let myArray = [];
      querySnapshot.forEach((doc) =>{
        myArray.push({...doc.data(), id: doc.id})
      })
      setPrayers(myArray)
      // console.log(myArray)
    });

  }, []);



  return (
    <div class="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
      <img
        class="object-cover w-full h-56"
        src="https://source.unsplash.com/random/900×700/?cross"
        alt="avatar"
      />

      <div class="py-5 text-center">
      {prayers.map(prayers => <div>{prayers.prayer}</div>)}
      </div>
    </div>
  );
}

export default Prayer;
