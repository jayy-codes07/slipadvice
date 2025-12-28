import React from 'react'
import Atmbox from './components/Atmbox'
import Recipt from './components/Recipt'

const App = () => {
  return (
    
    <div className='min-h-300  w-full flex justify-center items-center bg-[url(https://adviceslip.com/app/img/bg-page.jpg?1354658625)] '>
      
      <div className='h-316  items-center bg-linear-to-r from-gray-700/50 via-gray-200/5 to-gray-700/50  w-full'>     

      <Atmbox />
     
    </div>
    </div>
  )
}

export default App