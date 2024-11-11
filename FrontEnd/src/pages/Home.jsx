import React from 'react';

function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 p-4">
      <div className="bg-white rounded-lg shadow-lg p-10 max-w-lg text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome to VideoTranslator</h1>
        <p className="text-gray-600 mb-8">
          Easily translate and dub videos into your preferred language. Just upload a video link, and our service will handle the rest.
        </p>
        <button
          onClick={() => (window.location.href = '/uploadvideo')}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition duration-200 ease-in-out"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Home;
