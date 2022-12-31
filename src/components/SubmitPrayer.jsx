import React from 'react';
import { useState, useEffect } from 'react';
import { db } from '../firebase';
import { query, collection, onSnapshot, getDocs, addDoc } from 'firebase/firestore';

function SubmitPrayer() {

//USE STATE
const [newPrayer, setPrayer] = useState("");

//DB
const prayerCollection = collection(db, 'Prayers');

//FUNCTIONS
  const createPrayer = async() =>{

      await addDoc(prayerCollection, {prayer: newPrayer})
  }

  return (
    <section class="flex flex-col  max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-blue-800 md:flex-col md:h-80">
      <div class="md:flex md:items-center p-12 md:justify-center md:w-full md:bg-blue-800 md:dark:bg-blue-800">
        <div class="px-6 py-6 md:px-8 md:py-0 ">
          <h2 class="text-lg font-bold text-gray-700 dark:text-white md:text-gray-100 text-center">
            Ask for Prayers{' '}
            <span class="text-blue-600 dark:text-blue-400 md:text-yellow-300">
              And
            </span>{' '}
            Give some Prayers
          </h2>

          <p class="mt-2 text-sm text-white text-center">
            Prayering is the super power that we Christians have been given. Our LORD Jesus Christ established it as a means for us to speak to and hear Him who created the heavens and the earth. Ask for Prayers & Pray for the requests of other that you see below.
          </p>
        </div>
      </div>

      <div class="flex w-full h-40pb-6 md:py-0 ">
        <form class="mx-12 w-full ">
          <div class="flex flex-col p-1.5 mt-7 justify-center overflow-hidden border rounded-lg dark:border-gray-600 lg:flex-row dark:focus-within:border-blue-300 focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
            <input
            onChange={(event) => {
              setPrayer(event.target.value)
            }}
              className="px-6 py-2 w-full text-gray-700 placeholder-gray-500 bg-white outline-none dark:bg-gray-800 dark:placeholder-gray-400 focus:placeholder-transparent dark:focus:placeholder-transparent"
              type="text"
              name="prayer"
              placeholder="Ask for a Prayer"
              aria-label="Ask for a Prayer"
            />

            <button onClick={createPrayer}  class="px-4 w-64 h-16 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">
              Submit Prayer
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default SubmitPrayer;
