import React, { useEffect, useState } from "react";


const Atmscreen = ({ clickyes,clickno, onYes, onNo }) => {
  const [printdone, setprintdone] = useState(null)

  useEffect(() => {
    if (clickyes) {
      const timer = setTimeout(() => {
        setprintdone(true);
      }, 3000); 

      return () => clearTimeout(timer);
    } else {
      setprintdone(false); 
    }
  }, [clickyes]);

  return (
   <div className="relative w-[260px] h-[220px] sm:w-[320px] sm:h-[240px] md:w-[650px] md:h-[520px] bg-[#2a1a5e] border-[3px] border-black shadow-[inset_0_0_60px_rgba(0,0,0,0.8)] flex flex-col items-center justify-center text-center p-4 md:p-6 z-10 transition-all duration-300">   
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://adviceslip.com/app/img/bg-page.jpg?1354658625')]"></div>

      <div className="relative w-full z-20 text-[#dccb88] tracking-widest space-y-22">
        <h1 className="text-xl md:text-4xl uppercase opacity-90 drop-shadow-md font-['VT323']">
         {!clickno ? "Take your Quote." : "don't you want any Quote today" }
        </h1>
        
        <div className="text-md md:text-3xl uppercase opacity-90 drop-shadow-md min-h-[60px] flex justify-center items-center">
         {clickno ? (
          
            <span className="font-['VT323'] text-6xl md:text-8xl cursor-pointer hover:opacity-80">
             
            </span>
          ) : (
            
            !clickyes ? (
              <div className="border-[#dccb8863] border-solid my-4 px-16 border-y flex font-['VT323'] justify-around items-center w-full">
                <span onClick={onNo} className="cursor-pointer hover:text-white px-4 py-2">
                  No
                </span>
                <div className="h-16 border-l border-[#dccb8863] mx-4"></div>
                <span onClick={onYes} className="cursor-pointer hover:text-white px-4 py-2">
                  Yes
                </span>
              </div>
            ) : (
              
              <span className="font-['VT323'] animate-pulse">{printdone ? "Check down below" : "PRINTING..."}</span>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Atmscreen;
