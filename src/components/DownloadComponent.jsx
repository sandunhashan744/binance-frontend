import React from 'react'
import './css/download.css'

const DownloadComponent = () => {
  return (
    <div className='downloadApp' id='downloadApp'>
        <div className="container">
          {/* <div className="row">
            <h1 className='mb-3'>Download Here</h1>
            <p className='mb-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga velit
               deleniti eveniet ad. Distinctio labore itaque cupiditate incidunt! 
              Repudiandae enim facere sequi harum ratione dolorem eos alias, natus quis deleniti.</p>
          </div> */}
            <div className="col-12 mb-5">
              <div className="row">
                <h1 className='mb-3'>Download Here</h1>
                <p className='mb-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga velit
                  deleniti eveniet ad. Distinctio labore itaque cupiditate incidunt! 
                  Repudiandae enim facere sequi harum ratione dolorem eos alias, natus quis deleniti.</p>
              </div>
              <div className="row">
                <div className="col-md-4 sm={{span:3}} md={{span:3}}" >
                  <div className="card mb-5">
                    <div className="card-header">
                      <h5>For 07 Day <samp className='badge badge-primary float-right'>Free</samp></h5>
                    </div>
                    <div className="card-body">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate delectus facere fugit nostrum aspernatur ratione quis ut exercitationem, assumenda et magnam minus mollitia accusantium autem perspiciatis accusamus dolorum eos provident.</p>
                    </div>
                    <div className="card-footer">
                      <button className='btn btn-warning float-right'>Download
                        <i className='fa fa-download ml-2'/></button>
                    </div>
                  </div>
                  
                </div>
                <div className="col-md-4 sm={{span:8}} md={{span:8}}">
                  <div className="card mb-5">
                    <div className="card-header">
                      <h5>Buy for 30 Day <samp className='badge badge-success float-right'>$30.00</samp></h5>
                    </div>
                    <div className="card-body">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate delectus facere fugit nostrum aspernatur ratione quis ut exercitationem, assumenda et magnam minus mollitia accusantium autem perspiciatis accusamus dolorum eos provident.</p>
                    </div>
                    <div className="card-footer">
                      <button className='btn btn-warning float-right'>Download
                        <i className='fa fa-download ml-2'/></button>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 sm={{span:8}} md={{span:8}}">
                  <div className="card mb-5">
                    <div className="card-header">
                      <h5>For Life Time <samp className='badge badge-danger float-right'>$300.00</samp></h5>
                    </div>
                    <div className="card-body">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate delectus facere fugit nostrum aspernatur ratione quis ut exercitationem, assumenda et magnam minus mollitia accusantium autem perspiciatis accusamus dolorum eos provident.</p>
                    </div>
                    <div className="card-footer">
                      <button className='btn btn-warning float-right'>Download
                        <i className='fa fa-download ml-2'/></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
        
    </div>
  )
}

export default DownloadComponent