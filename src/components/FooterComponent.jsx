import React from 'react';
import './css/footer.css';

const FooterComponent = () => {
  return (
        <div className='footer'>
            <div className='container'>
                <ul>
                    <li className='nav-item'>
                        <a href='/'>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#demo'>Demo</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#about'>About</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#testimonials'>Testimonials</a>
                    </li>

                </ul>
                <div className='bottom'>
                    <span className='line'></span>
                    <p>2022 Execute, Inc. All rights reserved</p>
                </div>
            </div>
        </div>
  )
}

export default FooterComponent