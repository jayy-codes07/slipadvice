import React from 'react'
import Atmbox from './components/Atmbox'
import Recipt from './components/Recipt'
import Footer from './components/Footer'

const App = () => {
  return (
    
    <>
    <div className='min-h-300  w-full flex justify-center flex-col items-center bg-[url(https://adviceslip.com/app/img/bg-page.jpg?1354658625)] '>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#333333_0%,_#111111_100%)] z-0"></div>
      <div className='h-285   items-center bg-linear-to-r from-gray-700/50 via-gray-200/5 to-gray-700/50  w-full'>     

      <Atmbox />
     
    </div>
    
    </div>
    <Footer/> 
    </>
  )
}

export default App