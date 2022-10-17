import React from 'react'
import './css/pricing.css'

const PricingComponent = () => {
  return (
    <div className='pricingApp' id='pricingApp'>
        <div className="container">
            {/* <div className="col-12">
                <div className="table borderless">
                    <tr>
                        <th className='features'></th>
                        <th className='freePac'>Demo</th>
                        <th className='premium'>Premium</th>
                    </tr>
                    <tr><td></td><td></td><td></td></tr>
                    <tr>
                        <td>Price</td>
                        <td className='wrong'>Free</td>
                        <td className='correct'>$ 250.00</td>
                        
                    </tr>
                    <tr>
                        <td>Duration</td>
                        <td className='wrong'>7 Days</td>
                        <td className='correct'>Life Time</td>
                    </tr>

                    
                    <tr>
                        <td></td>
                        <td><button className='btn mt-5'>Get It <i className='fa fa-download ml-2'/></button></td>
                        <td><button className='btn  mt-5'>Get It <i className='fa fa-download ml-2'/></button></td>
                    </tr>
                </div> 
            </div> */}
            <div className="row">

                <div className="card cd-feature">
                    <div className="card-body cbody-feature">
                        <p className='body-text'>Price :</p><samp className='line-price'/>
                        <p className='body-text'>Duration :</p><samp className='line-price'/>
                    </div>
                </div>

                <div className="card cd">
                    <div className="card-header cd-head">
                        <p className='cd-titel'>Demo</p>
                    </div>
                    <div className="card-body cbody">
                        <p className='body-text'>Free</p>
                        <samp className='line'/>
                        <p className='body-text'>03 Days</p>
                        <samp className='line'/>
                    </div>
                    <div className="card-footer cfoot">
                        <button className='cd-btn'>Get It <i className='fa fa-download ml-3'/></button>
                    </div>
                </div>

                <div className="card cd">
                    <div className="card-header cd-head">
                        <p className='cd-titel'>Premium</p>
                    </div>
                    <div className="card-body cbody">
                        <p className='body-text'>$ 250.00</p>
                        <samp className='line'/>
                        <p className='body-text'>Life Time</p>
                        <samp className='line'/>
                    </div>
                    <div className="card-footer cfoot">
                        <button className='cd-btn'>Get It <i className='fa fa-download ml-3'/></button>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default PricingComponent