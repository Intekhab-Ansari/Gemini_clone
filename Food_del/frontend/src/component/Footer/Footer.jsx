import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className='footer-content'>
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid modi illum natus fuga pariatur dignissimos laboriosam eligendi iusto corporis odit consectetur, vitae quam ex eum necessitatibus libero atque earum et.</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>9876543210</ul>
                    <ul>FoodDel@gmail.com</ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">Copyright 2024 © Food Del.com - All Right Reserved.</p>
        </div>
    )
}

export default Footer
