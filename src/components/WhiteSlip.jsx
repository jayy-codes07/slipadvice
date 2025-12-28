import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

const WhiteSlip = ({ isPrinting }) => {
  const [advicecall, setadvicecall] = useState(null);
  const [author, setauthor] = useState(null);
  const [dateTime, setDateTime] = useState(new Date());
  

  const slipRef = useRef(null);

  const generateadvice = async () => {
    const res = await axios.get("https://dummyjson.com/quotes/random");
    const advice = res.data;
    setadvicecall(advice.quote);
    setauthor(advice.author);
  };

  useEffect(() => {
    generateadvice();
    setDateTime(new Date());
  }, []);

  
  useEffect(() => {
    if (isPrinting) {
   
      setTimeout(() => {
       
        window.scrollBy({ top: 600, behavior:'smooth' });

      
      }, 100);
    }
  }, [isPrinting]);

  

  return (
   
    <div className="flex justify-center items-start w-full h-full min-h-screen">
      
    
      <div
        ref={slipRef}
        className={`
           w-120 md:w-140 mt-95 bg-transparent
           overflow-hidden origin-top
           transition-all duration-[3000ms] ease-linear
           ${isPrinting ? "max-h-[1500px]" : "max-h-0"}
        `}
      >
        
        <div className="h-auto w-full bg-gray-200 flex justify-center items-center flex-col gap-2 pb-5 shadow-xl">
          <h1 className="font-['VT323'] text-4xl pt-4 font-light">
            QUOTES.COM
          </h1>
          <h5 className="w-full border-b-2 border-dashed border-black my-4 opacity-50"></h5>
          
          <h1 className="font-['VT323'] md:text-3xl text-xl text-center px-6 break-words">
            {advicecall}
          </h1>
          
          <h6 className="mt-2">
            BY: {author}
          </h6>

          <h5 className="w-full border-b-2 border-dashed border-black my-4 opacity-50"></h5>
          
          <div className="flex justify-between gap-30 md:gap-60">
             <h6>
                {dateTime.toLocaleDateString("en-US", {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
            </h6>
            <h6>
                {dateTime.toLocaleTimeString("en-US")}
            </h6>
          </div>
          
          <h5 className="w-full border-b-2 border-dashed border-black my-4 opacity-50"></h5>
          
          <div className="flex justify-around md:gap-10 gap-3 sm:flex ">
            <h6 className="flex gap-2 items-center">
              <img
                className="h-7 w-7"
                src="https://img.icons8.com/?size=100&id=YtpeVQhQ8USm&format=png&color=000000"
                alt=""
              />
              Share this
            </h6>
            <h6 className="flex gap-2 items-center">
              <img
                className="h-6 w-6"
                src="https://img.icons8.com/?size=100&id=xw0uP-hnyCSs&format=png&color=000000"
                alt=""
              />
              Pin this
            </h6>
          </div>
          
          <h5 className="w-full border-b-2 border-dashed border-black my-4 opacity-50"></h5>
          
          <h2 className="font-['VT323'] text-4xl pt-5 mb-5">
            COMPLETELY IGNORE THIS
          </h2>
        </div>

        {/* Bottom Zig-Zag Decoration */}
        <div
          className="h-5 w-full shadow-xl"
          style={{
            backgroundImage: `
            linear-gradient(45deg, transparent 33.333%, #E5E7EB 33.333%, #E5E7EB 66.667%, transparent 66.667%), 
            linear-gradient(-45deg, transparent 33.333%, #E5E7EB 33.333%, #E5E7EB 66.667%, transparent 66.667%)`,
            backgroundSize: "20px 40px",
            backgroundPosition: "0 -20px",
          }}
        ></div>
      </div>
    </div>
  );
};

export default WhiteSlip;