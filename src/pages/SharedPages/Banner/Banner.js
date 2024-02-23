import React from 'react';
import { Carousel, Form, InputGroup } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <div className='w-100 d-flex flex-column justify-content-center align-items-center' style={{ backgroundImage: 'url("https://i.ibb.co/zrQGMLh/bannerbackground-logo-bg.jpg")', backgroundPosition: 'center center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '90vh' }}>
                        <h3>Best food is waitting for your belly.</h3>

                        {/* searchbox  */}
                        <div className="search-box">
                            <form className='search-form' action="">
                                <input type="text" name="search-input" id="search-input" placeholder='Search your foods' />
                                <button type='submit'>Search</button>
                            </form>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;