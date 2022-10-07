import React from 'react'
import './css/demo.css'

const DemoComponent = () => {
  return (
    <div className='demo' id='demo'>
        <div className='container'>
            <div className='col-12'>
              <h1 className='mb-5'>How to Use</h1>
                <p>More Than 100 Financial Planners,</p>
                <p>One Philosophy</p>
                <p>Every single one of our financial advisors receives rigorous training according to John Doe’s philosophy based on academic research (including that of a Nobel laureate in Economics) and Behavioral Finance.</p>
                <button className='button mt-3'>Get your free financial analysis</button>
            </div>
            <div className='col-12'>
                <iframe width='570' height='320' src='https://www.youtube.com/embed/6RO0swH6fAo' 
                title='Youtube video player' frameBorder="0" allow="accelerometer; autoplay; 
                clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            </div>
            
        </div>
    </div>
    
  )
}

export default DemoComponent