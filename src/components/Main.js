import React, { useReducer } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Bookingpage from './Bookingpage'
import Header from "./Header"
import Confirmed from './Confirmed'

function Main() {
  const seedRandom = (seed) => {
    var m = 2 ** 35 - 35;
    var a = 185852;
    var s = seed % m;
    return function () {
      return (s = s * a % m) / m;
    }
  }

  const fetchAPI = (date) => {
    let result = [];
    let random = seedRandom(date.getDate());
    for (let i = 17; i <= 23; i++) {
      if (random() > 0.5) {
        result.push(i + ':00')
      }
      if (random() > 0.5) {
        result.push(i + ':30')
      }
    }
    return result;
  }
  const submitAPI = (formData) => {
    return true;
  }

  const initialState = { availableTimes: fetchAPI(new Date()) }
  const updateTimes = (state, date) => {
    return { availableTimes: fetchAPI(new Date()) }
  }
  const [state, dispatch] = useReducer(updateTimes, initialState);

  const confirm = useNavigate();

  const submitFrom = (formData) => {
    if (submitAPI(formData)) {
      confirm("/Confirmed")
    }
  }
  return (
    <>
      <main>
        <Routes>
          <Route path='/' element={<Header />} />
          <Route path='/Bookingpage' element={<Bookingpage availableTimes={state} dispatch={dispatch}
            submitFrom={submitFrom} />}></Route>
          <Route path='/Confirmed' element={<Confirmed />} />
        </Routes>
      </main>

    </>
  )
}

export default Main;