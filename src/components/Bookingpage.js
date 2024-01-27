import React from 'react'
import Bookingform from './Bookingform'

const Bookingpage = (props) => {
  return (
    <>
    <Bookingform availableTimes ={props.availableTimes} dispatch={props.dispatch} SubmitForm ={ props.SubmitForm}/>
    </>
  )
}

export default Bookingpage