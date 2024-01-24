import React from 'react'
import resturantFood from "../assets/images/restauranfood.jpg"

const Footer = () => {
  return (
    <footer>
      <div>
        <img src={resturantFood} alt='food' />
      </div>
      <div>
        <span>Doormat Navigation </span>
        <ul>
          <li><a href='/#'>home</a></li>
          <li><a href='/#'>About</a></li>
          <li><a href='/#'>menu</a></li>
          <li><a href='/#'>Reservation</a></li>
          <li><a href='/#'>Order Online</a></li>
          <li><a href='/#'>login</a></li>
        </ul>
      </div>
      <div>
        <span>Contact </span>
        <ul>
          <li><a href='/#'>Address</a></li>
          <li><a href='/#'>Phone Number</a></li>
          <li><a href='/#'>E mail</a></li>

        </ul>
      </div>
      <div>
        <span>Social Media links </span>
        <ul>
          <li><a href='/#'>Address</a></li>
          <li><a href='/#'>Phone Number</a></li>
          <li><a href='/#'>E mail</a></li>
        </ul>
      </div>

    </footer>
  )
}

export default Footer;