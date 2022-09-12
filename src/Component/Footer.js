import React from 'react'
import allImg from '../images/Group 79.svg'
import '../Styles/Sect.css'
import '../Styles/Footer.css'

const Footer = () => {
  return (
    <div className='footer-hero'>
        <div>
            <ul>
                <a href=""><h4>Products</h4></a>
                <a href=""><li>Bitcoin</li></a>
                <a href=""><li>Alt</li></a>
                <a href=""><li>Fiat</li></a>
                <a href=""><li>Refill</li></a>
                <a href=""><li>P2P</li></a>
            </ul>
        </div>

        <div>
            <ul>
                <a href=""><h4>Learn</h4></a>
                <a href=""><li>Blog</li></a>
                <a href=""><li>Help Center</li></a>
            </ul>
        </div>

        <div>
            <ul>
                <a href=""><h4>Contact</h4></a>
                <a href=""><li>hello@tradingexpress.com</li></a>
                <a href=""><li>support@tradingexpress.com</li></a>
                <a href=""><li><img src={allImg} alt="" /></li></a>
            </ul>
        </div>

        <div>
            <ul>
                <a href=""><h4>Company</h4></a>
                <a href=""><li>About us</li></a>
                <a href=""><li>Careers</li></a>
                <a href=""><li>Rates</li></a>
                <a href=""><li>Mobile</li></a>
            </ul>
        </div>
        <div>
            <ul>
                <a href=""><h4>Legal</h4></a>
                <a href=""><li>Privacy Policy</li></a>
                <a href=""><li>Anti-Money Laundering</li></a>
                <a href=""><li>Terms and Conditions</li></a>
            </ul>
        </div>
    </div>
  )
}

export default Footer