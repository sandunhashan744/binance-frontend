import React from 'react'
import ReactPlayer from 'react-player'
import './css/demo.css'

const DemoComponent = () => {
  return (
    <div className='demo' id='demo'>
        <div className='container'>
            <div className='col-12'>
                <ReactPlayer controls={true} url='https://youtu.be/Gr6ozTmmEdk' width={'100%'} height={'65vh'}/>
            </div>
        </div>
    </div>
  )
}

export default DemoComponent