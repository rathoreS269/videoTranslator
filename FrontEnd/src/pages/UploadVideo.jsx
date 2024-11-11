import React, { useState } from 'react';

function UploadVideo() {
  const [videoLink, setVideoLink] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async () => {
    setIsProcessing(true);
    // Processing code here...
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Upload Video Link</h2>
        <p className="text-gray-600 mb-6">
          Paste the link to your video below.
        </p>
        <input
          type="text"
          placeholder="Enter video link"
          value={videoLink}
          onChange={(e) => setVideoLink(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
        />
        <button
          onClick={handleSubmit}
          disabled={isProcessing}
          className={`w-full py-3 bg-blue-500 text-white rounded-lg shadow-lg transition duration-200 ease-in-out ${
            isProcessing ? 'bg-gray-400 cursor-not-allowed' : 'hover:bg-blue-600'
          }`}
        >
          {isProcessing ? 'Processing...' : 'Submit'}
        </button>
      </div>
    </div>
  );
}

export default UploadVideo;
