import React, { useState } from 'react';

const FloatingTextChat = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleTextClick = () => {
    // Open SMS app with pre-filled business number
    window.location.href = 'sms:9474654217?body=Hi! I would like to get a quote for cleaning services for my home.';
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Message above chat button */}
      <div className="absolute bottom-full right-0 mb-3 px-3 py-2 bg-white text-gray-800 text-sm rounded-lg shadow-lg border whitespace-nowrap">
        Text us now to get help right away
        <div className="absolute top-full right-4 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
      </div>
      
      <button
        onClick={handleTextClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="bg-primary hover:bg-orange-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 group"
        aria-label="Send us a text message"
      >
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 1.864.586 3.594 1.565 4.994a.75.75 0 01.117.764L2.727 20.15a.75.75 0 00.834 1.035l1.243-.341z"
            clipRule="evenodd"
          />
        </svg>
        
        {/* Tooltip */}
        {isHovered && (
          <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap opacity-0 animate-in fade-in duration-200">
            Send us a text!
            <div className="absolute top-full right-4 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
          </div>
        )}
      </button>
      
      {/* Floating notification dot */}
      <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
    </div>
  );
};

export default FloatingTextChat;