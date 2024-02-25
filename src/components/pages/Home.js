import React from 'react';
import Slider from '../inc/Slider';
import { Link } from 'react-router-dom';
import Vmc from '../inc/Vmc';
import Service1 from '../img/berlin.jpg'
import Service2 from '../img/greenland.jpg'
import Service3 from '../img/scene.jpg'

function Home() {
    return (
        <div>
            <Slider />
            <section>
                <div className='container'>
                    <div className='text-center main-context'>
                    <h3 className='main-hd'>Nature's View</h3>
                    <div className='underline mx-auto'></div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <Link to="/about" className="btn btn-warning shadow">Read More</Link>
                    </div>
                    </div>
            </section>
            
            {/* our values */}

            <Vmc/>
            
            {/* our values */}
            <section className=''>
        <div className='container'>
            <div className='text-center main-context'>
            <h3 className='main-hd'>Tours</h3>
            <div className='underline mx-auto'></div>
            </div>
            <div className='row mt-4'>
                        <div className='col-md-4 pt-4 pb-4'>
                            <div className='card shadow'>
                                    <img src={Service1} className='w-100 border-bottom'/>
                                <div className='card-body'>
                                    <h6>Berlin</h6>
                                    <div className='underline'></div>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                            </div>
                </div>
                <div className='col-md-4 pt-4 pb-4'>
                            <div className='card shadow'>
                                    <img src={Service2} className='w-100 border-bottom'/>
                                <div className='card-body'>
                                    <h6>Greenland</h6>
                                    <div className='underline'></div>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                            </div>
                </div>
                <div className='col-md-4 pt-4 pb-4'>
                            <div className='card shadow'>
                                    <img src={Service3} className='w-100 border-bottom'/>
                                <div className='card-body'>
                                    <h6>Auckland</h6>
                                    <div className='underline'></div>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                            </div>
                </div>
            </div>
            </div>
    </section>

        </div>
    );
}
export default Home;