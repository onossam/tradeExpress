import React from 'react'
import mailing from '../images/mailing (1).svg'
import '../Styles/Almostin.css'

const Almostin = () => {
  return (
    <div className='almostin-sect'>
      <h2 id='almostinsect'>You're Almost In!</h2>
      <h2>Welcome Samuel</h2>
      <img src={mailing} alt="" />
      <p>An Activation link has been sent to <a href="">example@gmail.com</a> Please click on the link to verify your email and activate your TradeExpress account.</p>
      <button>Continue</button>
      <p>Didnt get email? kindly click <a href="">resend email</a></p>
      <p>Wrong email supplied? <a href="">Edit email  address</a></p>

    </div>
  )
}

export default Almostin