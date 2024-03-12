import React from 'react';
import { Card } from 'react-bootstrap';
import './Meal.css';

const Meal = ({ myMeal, handleMealsDetails, handleAddToCart }) => {
    const { picture, name, type, description } = myMeal;

    return (
        <div className="single-meal custom-border-style">


            < div className='meals-card-container' onClick={() => handleMealsDetails(myMeal)} >
                <Card className='border-0 pt-3 custom-border-style mb-0 meals-cart' >
                    <Card.Img variant="top" src={picture} className='mx-auto' style={{ width: '280px' }} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>{description && description.slice(0, 50) + ' ...more'}</Card.Text>
                        <Card.Text>{type[0].toUpperCase() + type.substring(1)}</Card.Text>
                    </Card.Body>
                </Card>
            </div >
            <button onClick={() => handleAddToCart(myMeal)} className='w-100  meal-btn-add-cart bottom-0 py-2' >Add To Cart</button>

        </div>
    );
};

export default Meal;