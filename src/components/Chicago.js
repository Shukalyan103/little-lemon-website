import React from 'react'
import Adrian from "../assets/images/Mario and Adrian A.jpg"
import Mario from "../assets/images/Mario and Adrian b.jpg"
const Chicago = () => {
  return (
    <>
      <div className="history">
        <div>
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
          </p>
        </div>
        <div className='image'>
          <img id='img1' src={Adrian} alt='owner' />
          <img id='img2' src={Mario} alt='owner' />
        </div>
      </div>
    </>
  )
}

export default Chicago