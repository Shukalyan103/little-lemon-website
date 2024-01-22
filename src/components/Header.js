import React from 'react'
import "../App.css"
import resturantFood from "../assets/images/restauranfood.jpg"





function Header() {
  return (
    <>
    <header>
     <section className='intro'>
      <h1>Little Lemon</h1>
      <h3>Chicago</h3>
      <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
      <button className='btn'>Reserve a table</button>
      </section>
     <div>
    <img src={resturantFood} alt='food'/>
     </div>
    </header>
    </>
  )
}

export default Header;