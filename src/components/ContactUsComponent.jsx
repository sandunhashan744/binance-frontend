import React from 'react'
import './css/contact.css'

const ContactUsComponent = () => {
  return (
    <div className='contact' id='cotactUS'>
      <div className="container">    
        <div className="row">
        <div className="col-md-6">
        <h1 className="mb-3">Contact Us</h1><hr />
        
          <address>

            <strong><i className='fa fa-envelope mr-2'/>Email : binancetotele@gmail.com</strong><br /><br />
            <strong><i className='fa fa-phone mr-2'/> Phone : +94375754098</strong><br /><br />
            <strong><i className='fa fa-map-marker mr-2'/>Address :  No 122, Colombo, Sri Lanka</strong><br /><br />
          </address>
        </div>
        <div className="col-md-6 mb-4 ">
          
            <div className="form ml-4 mr-3">
              <div className="row">
                <label htmlFor="" class="col-sm-3 col-form-label">Name: </label>
                <input type="text" name="name" id="name" className='form-control col-md-8 mb-4' />
              </div>
              <div className="row">
                <label htmlFor="" class="col-sm-3 col-form-label">Email: </label>
                <input type="email" name="email" id="email" className='form-control col-md-8 mb-4' />
              </div>
              <div className="row">
                <label htmlFor="" class="col-sm-3 col-form-label">Subject: </label>
                <input type="text" name="subject" id="subject" className='form-control col-md-8 mb-4' />
              </div>
              <div className="row">
                <label htmlFor="" class="col-sm-3 col-form-label">Message: </label>
                <textarea name="message" id="message" className='form-control col-md-8 mb-4' rows="5" />
              </div>
              <div className="row float-right">
                <button className='btn btn-warning mr-5'>Send<i className='fa fa-paper-plane ml-2'/></button>
              </div>
            </div>
        </div>
      </div>  
      </div>
    </div>
  )
}

export default ContactUsComponent