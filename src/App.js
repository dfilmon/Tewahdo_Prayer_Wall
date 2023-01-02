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
  const [prayedFor, setPrayedFor] = useState(0)

  useEffect(() => {
    const prayerCollectionRef = query(collection(db, 'Prayers'));

    const unsubscribe = onSnapshot(prayerCollectionRef, (querySnapshot) => {
      
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

    <h3 className='text-5xl text-white text-center mt-12'>Tewahdo</h3>
      <h1 className='titleText text-5xl text-white text-center pb-12 mb-12'>Prayer Wall</h1>
      <SubmitPrayer />
      <div className="main_prayer_container" >
      
      {prayers.map((prayers) => (
        <div>
          <Prayer prayer={prayers.prayer} prayedFor={prayedFor} />
        </div>
      ))}


    </div>
      </div>

  );
}
