import React from 'react'
import Greeksalad from "../assets/images/greek salad.jpg"
import bruchetta from "../assets/images/bruchetta.svg"
import cycle from "../assets/images/Group.svg"
import lemondessert from "../assets/images/lemon dessert.jpg"
import "../App.css"
const Special = () => {
  return (
    <>
      <section className='special'>
        <div><h1>Specials</h1></div>
        <button>Online Menu</button>
      </section>
      <section className='food-list'>

        <div className='box'>
          <img src={Greeksalad} alt='food' />
          <div className='food-name'>
            <div><span className='name'>Greek salad</span></div>
            <div><span className='price'>$12.99</span></div>
          </div>
          <p id='food-description'>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
          <div className='order'>
            <p>Order a delivery</p>
            <span className='order-logo'><img src={cycle} alt='order-logo' /></span>
          </div>
        </div>

        <div className='box'>
          <img src={bruchetta} alt='food' />
          <div className='food-name'>
            <div><span className='name'>Bruchetta</span></div>
            <div><span className='price'>$5.99</span></div>
          </div>
          <p id='food-description'>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. </p>
          <div className='order'>
            <p>Order a delivery</p>
            <span className='order-logo'><img src={cycle} alt='order-logo' /></span>
          </div>
        </div>

        <div className='box box3'>
          <img src={lemondessert} alt='food' />
          <div className='food-name'>
            <div><span className='name'>Lemon Dessert</span></div>
            <div><span className='price'>$5.00</span></div>
          </div>
          <p id='food-description'>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
          <div className='order'>
            <p>Order a delivery</p>
            <span className='order-logo'><img src={cycle} alt='order-logo' /></span>
          </div>
        </div>
      </section>
    </>
  )
}

export default Special