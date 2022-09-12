import React from 'react'
import group from '../images/Group 8699.svg'
import '../Styles/Review.css'
import random1 from '../images/random11.jpeg'
import random2 from '../images/random22.jpeg'
import random3 from '../images/random33.jpeg'

const Review = () => {
  return (
    <div className='review-main'>
        <h2>Customer's Review</h2>
        <div className='Review-0'>
          <div className='Review-1'>
            
            
            <p><img className='review-img1' src={group} alt="" />Trading on TradExpress mobile & web platforms has been a smooth experience for me quite easy to navigate.</p>
            <div>
            <img id='review-img2' style={{ width: 70, height: 70 }}src={random1} alt="" />
            </div>
            </div>

          <div className='Review-1'>
            
           
            <p> <img className='review-img1' src={group} alt="" />They have the best rate compared to other platforms with fast payout.</p>
            <div>
            <img id='review-img2' style={{ width: 70, height: 70 }}src={random2} alt="" />
            </div>
            </div>

          <div className='Review-1'>
          
            
            <p><img className='review-img1' src={group} alt="" />Easy to fund and withdraw coins or cash on their platform, I will definitely trade with them again.</p>
            <div>
            <img id='review-img2' style={{ width: 70, height: 70 }}src={random3} 
            alt="" />
            </div>
            
           
            </div>
         
          
        </div>
    </div>
  )
}

export default Review