

import React, { useState } from "react";
import SilverButton from "./SilverButton";
import Recipt from "./Recipt";
import Atmscreen from "./Atmscreen";

const Atmbox = () => {
  const [clickyes, setclickyes] = useState(false);
  const [clickno, setclickno] = useState(false);
  const [isPrinting, setIsPrinting] = useState(false);


  const playSound = () => {
    
    const audio = new Audio("/src/assets/button-press-382713.mp3");
    audio.volume = 0.5;
    audio.play().catch((e) => console.log("Audio Error:", e));
  };


  const handleYes = () => {
    if (clickno) return;
    playSound(); 
    setclickyes(true);
    setTimeout(() => setIsPrinting(true), 200);
  };

  const handleNo = () => {
    if (clickyes) return;
    playSound();
    setclickno(true);
  };

 
  const handleHardwareClick = (side, index) => {
    if (clickno) return;
    playSound();

    if (side === "right" && index === 2) {
      handleYes();
    }
  
    if (side === "left" && index === 2) {
      handleNo();
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-black overflow-hidden relative font-mono">
      
     
   <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#333333_0%,_#111111_100%)] z-0"></div>
      
      <div className="relative flex flex-col items-center">
        
        
        

      
        <div className="relative z-20 bg-[#08080854] p-8 rounded-2xl shadow-[0_20px_60px_-10px_rgba(0,0,0,0.9)] border-t border-gray-800">
          <div className="flex items-center gap-0">
            
         
            <div className="flex flex-col gap-6 mr-[-2px] z-20">
              {[...Array(4)].map((_, i) => (
                <SilverButton
                  key={`left-${i}`}
                  side="left"
                  index={i}
                  onClick={handleHardwareClick}
                />
              ))}
            </div>

        
            <Atmscreen 
              clickyes={clickyes} 
              clickno = {clickno}
              onYes={handleYes} 
              onNo={handleNo} 
            />

      
            <div className="flex flex-col gap-6 ml-[-2px] z-20">
              {[...Array(4)].map((_, i) => (
                <SilverButton
                  key={`right-${i}`}
                  side="right"
                  index={i}
                  onClick={handleHardwareClick}
                />
                
              ))}
              
            </div>
            

          </div>
         
        </div>
       <Recipt isPrinting={isPrinting}/>
      </div>
  
    </div>
  );
};

export default Atmbox;