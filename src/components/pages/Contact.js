import React from 'react';
import { Link } from 'react-router-dom';

function Contact() {
    return (
        <section>
            <div className='container'>
            <nav aria-label="breadcrumb" className='breadcrumb'>
  <ol className="breadcrumb">
    <li className="breadcrumb-item"><Link to="/" className='bread-lnk'>Home</Link></li>
    <li className="breadcrumb-item active" aria-current="page">Contact</li>
  </ol>
                </nav>
                <div className='abt-ttl pb-4'>
                <h1>Contact Us</h1>
                <div className='underline'></div>
                </div>
                <div className='row shadow p-3'>
                    <div className='col-md-6'>
                        <h5>Contact Form</h5>
                        <hr />
                        <div className='form-group'>
                            <label className='mb-1'>Full Name</label>
                            <input type='text' className='form-control' placeholder='Enter Your Full Name' />
                        </div>
                        <div className='form-group'>
                            <label className='mb-1'>Phone Number</label>
                            <input type='text' className='form-control' placeholder='Enter Your phone Number' />
                        </div>
                        <div className='form-group'>
                            <label className='mb-1'>Email Address</label>
                            <input type='text' className='form-control' placeholder='Enter Your Email-ID' />
                        </div>
                        <div className='form-group'>
                            <label className='mb-1'>Message</label>
                            <textarea rows="3" className='form-control' placeholder='Type your message' />
                        </div>
                        <div className='form-group mt-4'>
                            <button type="button" className='btn-frm shadow w-100'>Send Message</button>                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193746.99544999623!2d-74.10980954660558!3d40.64538737078174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25b0a449c39c9%3A0xc62355aa46c985fa!2sBrooklyn%20Museum!5e0!3m2!1sen!2sin!4v1708530694161!5m2!1sen!2sin" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
      </div>  
        </section>
            
    );
}
export default Contact;