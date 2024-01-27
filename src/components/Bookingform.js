import React, { useState } from 'react'
import "./form.css"
import restaurant from "../assets/images/restaurant.jpg"
import { Link } from 'react-router-dom';

const Bookingform = (props) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guest, setGuest] = useState("");
  const [occasion, setOccasion] = useState("");

  const handleChange = (e) => {
    setDate(e);
    props.dispatch(e)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    props.SubmitForm(e);
  }


  return (
    <>
      <header>
        <section>
          <form onSubmit={handleSubmit}>
            <fieldset className='field'>
              <div className='form-details'>
                <div>
                  <label htmlFor='date'>Date</label>
                  <input id='book-date' value={date} name='date' onChange={(e) => {
                    handleChange(e.target.value)

                  }} type="date" required />
                </div>
                <div>
                  <label htmlFor='time'>time</label>
                  <select id='time' value={time} onChange={(e) => {
                    setTime(e.target.value)
                  }}>
                    <option>Select Date</option>
                    {
                      props.availableTimes.availableTimes.map(availableTimes => {
                        return <option key={availableTimes}>
                          {availableTimes}
                        </option>
                      })
                    }
                  </select>
                </div>
                <div>
                  <label htmlFor='guest'>Number of Guest</label>
                  <input type="number" placeholder="1" min="1" max="10" id="guests" value={guest} onChange={(e) => {
                    setGuest(e.target.value)
                  }} />
                </div>
                <div>
                  <label htmlFor="occasion">Occasion</label>
                  <select id="occasion" key={occasion} value={occasion} onChange={(e) => {
                    setOccasion(e.target.value)
                  }}>
                    <option>Select Occasion</option>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                  </select>
                </div>
                <div>
               <Link to= '/Confirmed'><button className='btn3'>Reserve Now</button></Link>
              </div>
              </div>
              <div className='pic'>
                <img src={restaurant} alt='resturant pic' />
              </div>
              
            </fieldset>
          </form>
        </section>
      </header>
    </>
  )
}

export default Bookingform