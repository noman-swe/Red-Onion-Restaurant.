import React from 'react';
import { Card } from 'react-bootstrap';
import './MealDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

const MealDetails = ({ showMeal }) => {
    const { picture, name, type, description, price } = showMeal;

    const handleQunatityPlus =()=>{
        
    }
    console.log(showMeal);
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
                            <input id="phone-number" type="number" min="0" class="form-control text-center qantity-value" value="1" />
                            <FontAwesomeIcon icon={faPlus} onClick={handleQunatityPlus} className='ms-2 font-sixten' />
                        </div>
                    </div>
                    <Card.Text>{type}</Card.Text>
                    <div className="slider">
                        <h3>Slider</h3>
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