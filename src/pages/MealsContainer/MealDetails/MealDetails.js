import React from 'react';
import { Card } from 'react-bootstrap';
import './MealDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import MealsCarousel from '../MealsCarousel/MealsCarousel';

const MealDetails = ({ showMeal, handleAddToCart }) => {
    const { _id, picture, name, description, price } = showMeal;

    const handleQunatityPlus = () => {

    }

    return (
        <div className='row details-container'>
            <div className="info col-md-5 mb-5">
                <Card.Title className='details-title'>{name}</Card.Title>
                <Card.Body className='mt-4'>
                    <Card.Text>{description}</Card.Text>
                    <div className="pricing d-flex align-items-center">
                        <Card.Title className='me-3'>${price}</Card.Title>
                        <div className="quantity d-flex justify-content-center align-items-center">
                            <FontAwesomeIcon icon={faMinus} className='me-2 font-sixten' />

                            <input id="phone-number" type="number" min="0" className="form-control text-center qantity-value" defaultValue={1} />

                            <FontAwesomeIcon icon={faPlus} onClick={handleQunatityPlus} className='ms-2 font-sixten' />
                        </div>
                    </div>

                    {/* add to cart button */}
                    <div className="add-to-card my-3">
                        <button onClick={() => handleAddToCart(showMeal)} className='border-1 py-2 px-4 rounded-5 text-white fw-lighter font-sixten' style={{ border: '1px solid #F91944', backgroundColor: '#F91944' }}><FontAwesomeIcon icon={faCartShopping} className='pe-3' /> Add</button>
                    </div>

                    <div className="slider mt-4">
                        {/* Slider */}
                        <MealsCarousel picture={picture} key={_id}></MealsCarousel>
                    </div>

                </Card.Body>
            </div>
            <div className="col-md-7 d-flex">
                <Card.Img src={picture} className='w-75 mx-auto' />

            </div>
        </div>

    );
};

export default MealDetails;