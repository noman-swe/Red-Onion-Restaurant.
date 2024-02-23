import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <div className='w-100 d-flex flex-column justify-content-center align-items-center' style={{ backgroundImage: 'url("https://i.ibb.co/zrQGMLh/bannerbackground-logo-bg.jpg")', backgroundPosition: 'center center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '90vh' }}>
                        <h3>Best food is waitting for your belly.</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;