import React from 'react'
import "../App.css"
import resturantFood from "../assets/images/restauranfood.jpg"
import { Link} from 'react-router-dom';






function Header() {
  return (
    <>
    <header className='header1'>
     <section className='intro'>
      <h1>Little Lemon</h1>
      <h3>Chicago</h3>
      <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
      <Link to="/Bookingpage"><button className='btn' aria-label='On Click'>Reserve a table</button></Link>
      </section>
      
     <div>
    <img src={resturantFood} alt='food'/>
     </div>
    </header>
    </>
  )
}

export default Header;