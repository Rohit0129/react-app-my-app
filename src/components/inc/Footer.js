import React from 'react';
import { Link } from 'react-router-dom';
function Footer() {
    return (
        <section className='footer-sec'>
            <div className='container'>
                <div className='row ftr-cnt'>
                    <div className='col-md-4'>
                        <h2>Company Information</h2>
                        <hr/>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <div className='col-md-4'>
                        <h2>Quick Links</h2>
                        <hr/>
                        <div>
                        <Link to="/" className='ftr-lnks'>Home</Link>
                        </div>
                        <div>
                        <Link to="/about" className='ftr-lnks'>About Us</Link>
                        </div>
                        <div>
                        <Link to="/contact" className='ftr-lnks'>Contact US</Link>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <h2>Contact</h2>
                        <hr/>
                        <><p>200 Eastern Pkwy, Brooklyn, NY 11238, United States</p></>
                        <><p>+01 89XXXXX605</p></>
                    </div>
                </div>
                </div>
</section>
    );
}

export default Footer