import React from 'react';
import { Link } from 'react-router-dom';
import Vmc from '../inc/Vmc';

function About() {
    return (
        <section className='abt-sec'>
            <div className='container'>
            <nav aria-label="breadcrumb" className='breadcrumb'>
  <ol className="breadcrumb">
    <li className="breadcrumb-item"><Link to="/" className='bread-lnk'>Home</Link></li>
    <li className="breadcrumb-item active" aria-current="page">About</li>
  </ol>
</nav>
            <div className='abt-ttl pb-4'>
                <h1>Our Company</h1>
                <div className='underline'></div>
                </div>
            </div>  
            <Vmc/>
        </section>
        
    
        
    );
}
export default About;