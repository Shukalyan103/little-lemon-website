import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Bookingpage from './Bookingpage'

function Main() {
  return (
   <>
   <Routes>
    <Route path='/booking' element={<Bookingpage />}></Route>
   </Routes>
   </>
  )
}

export default Main