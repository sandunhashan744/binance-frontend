import React from 'react'

import Typewriter from 'typewriter-effect'
import './css/hero.css'

const Hero = () => {

    return (
        <div className='hero' id='hero'>
            <div className='content'>
                <p>Connect Your</p>
                <p>Telegram Signal &</p>
                <p>Automate Trading</p>

                <Typewriter className="test"
                    options={{
                        strings: ['Make Passive Income . . .', 
                                  'Real Time Trading . . .',
                                  'Don`t Miss Any Signal . . !',
                                  'Maximize Your Profit . . .'
                                ],
                        autoStart: true,
                        loop: true,
                        delay:60,
                        
                    }}
                    />

                <button className='button'>Buy Now</button>     
              
            </div>

        </div>
    )
}

export default Hero
