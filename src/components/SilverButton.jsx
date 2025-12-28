

import React from "react";

const SilverButton = ({ side, index, onClick }) => {
    
  return (
    <div
      className={`flex items-center ${
        side === "left" ? "flex-row" : "flex-row-reverse"
      }`}
    >
      <div
        onClick={() => onClick(side, index)}
        className="md:w-20 md:h-20 w-12 h-12 rounded-sm bg-gradient-to-br from-gray-300 via-gray-400 to-gray-600 border border-gray-400 shadow-[2px_2px_5px_rgba(0,0,0,0.5)] active:scale-95 transition-transform cursor-pointer z-30"
      ></div>

      
      <div className="w-3 h-2 bg-gray-600 shadow-inner z-0"></div>
    </div>
  );
};

export default SilverButton;