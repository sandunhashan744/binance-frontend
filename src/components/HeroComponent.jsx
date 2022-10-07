import React from 'react'
import './css/hero.css'

const Hero = () => {
    return (
        <div className='hero' id='hero'>
            <div className='content'>
                <p>Contact us</p>
                <p>binance@tricks.com</p>
                <p>Because Money</p>
                <p>Doesn't come with instructions</p>
                <button href='/' className='button'>Buy Now</button>
            </div>
        </div>
    )
}

export default Hero
