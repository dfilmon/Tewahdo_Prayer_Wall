import React from 'react';

function SubmitPrayer() {
  return (
    <section class="flex flex-col max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-blue-800 md:flex-row md:h-48">
      <div class="md:flex md:items-center md:justify-center md:w-1/2 md:bg-blue-800 md:dark:bg-blue-800">
        <div class="px-6 py-6 md:px-8 md:py-0">
          <h2 class="text-lg font-bold text-gray-700 dark:text-white md:text-gray-100">
            Ask for Prayers{' '}
            <span class="text-blue-600 dark:text-blue-400 md:text-yellow-300">
              And
            </span>{' '}
            Give some Prayers
          </h2>

          <p class="mt-2 text-sm text-gray-600 dark:text-gray-400 md:text-gray-400">
            Prayers is the super power Christians are given. Our LORD Jesus Christ established it as a means for us to speak and hear Him who created the heavens and the earth.
          </p>
        </div>
      </div>

      <div class="flex items-center justify-center pb-6 md:py-0 md:w-1/2">
        <form>
          <div class="flex flex-col p-1.5 overflow-hidden border rounded-lg dark:border-gray-600 lg:flex-row dark:focus-within:border-blue-300 focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
            <input
              class="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none dark:bg-gray-800 dark:placeholder-gray-400 focus:placeholder-transparent dark:focus:placeholder-transparent"
              type="text"
              name="email"
              placeholder="Enter your prayer"
              aria-label="Enter your prayer"
            />

            <button class="px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">
              Submit Prayer
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default SubmitPrayer;
