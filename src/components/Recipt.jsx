import React from 'react'
import WhiteSlip from './WhiteSlip'

const Recipt = ({isPrinting}) => {
  return (
     <div className="min-h-screen w-full flex items-start justify-center  relative font-mono">
      <div className="absolute inset-0  flex justify-center pt-25 z-0">

      <div className='h-5 w-150 bg-black/50 flex  items-center justify-center shadow-2xl border-b border-white/50'> 
      <WhiteSlip isPrinting ={isPrinting}/>
      </div>
      </div>
      </div>
  )
}

export default Recipt