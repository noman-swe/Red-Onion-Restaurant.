import React from 'react';
import { Carousel } from 'react-bootstrap';

const MealsCarousel = ({ picture }) => {
    return (
        <Carousel slide={false} className='w-50' >
            <Carousel.Item className='d-flex'>
                <img src={picture} className="d-block w-100" height={80} alt="" />
                <img src={picture} className="d-block w-100" height={80} alt="" />
            </Carousel.Item>
        </Carousel>
    );
};

export default MealsCarousel;

// 01724525582