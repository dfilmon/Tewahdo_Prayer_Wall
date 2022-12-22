import React from 'react';
import Prayer from './components/Prayer';
import { useState, useEffect } from 'react';
import { db } from './firebase';
import { query, collection, onSnapshot } from 'firebase/firestore';
import SubmitPrayer from './components/SubmitPrayer';
import 'tailwindcss/tailwind.css';
import './app.css';

export default function App() {
  const [prayers, setPrayers] = useState([]);

  useEffect(() => {
    const q = query(collection(db, 'Prayers'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let myArray = [];
      querySnapshot.forEach((doc) => {
        myArray.push({ ...doc.data(), id: doc.id });
      });
      setPrayers(myArray);
      // console.log(myArray)
    });
  }, []);

  return (
    <div>

      <h1 className='text-5xl text-white text-center p-12'>Tewahdo Prayer Wall</h1>
      <SubmitPrayer />
      <div className="main_prayer_container">
      
      {prayers.map((prayers) => (
        <div>
          <Prayer prayer={prayers.prayer} />
        </div>
      ))}


    </div>
      </div>

  );
}
