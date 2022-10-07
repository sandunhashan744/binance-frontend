import React from 'react'
import john from './img/john-doe.png'
import './css/about.css'

const About = () => {
    return (
        <div className='about' id='about'>
            <div className='container mb-5'>
                <img src={john} alt='john' />
                <div className='col-12'>
                    <h2>About</h2>
                    <p>Intense is an International Financial Planning company with offices i n multiple jurisdictions over the world. Working with Intense gives me the ability to advise internat ional expatriates living in the middle east from where I live in USA.</p>
                    <p>I am John Doe, a senior advisor for an independently owned financial planning company called Intense.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.psum expedita commodi odio obcaecati voluptatum soluta, provident rerum eum sit!</p>
                    {/* <button className='button'>Explore More</button> */}
                </div>
            </div>
        </div>
    )
}

export default About
