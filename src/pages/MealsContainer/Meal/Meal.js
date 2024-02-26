import React from 'react';
import { Card } from 'react-bootstrap';

const Meal = ({ myMeal }) => {
    const { picture, name, type, description } = myMeal;

    const handleMealsDetails = () => {
        alert('clicked');
    }

    const handleAddToCart = () => {
        alert('carted');
    }
    return (
        < div className='meals-card-container custom-border-style position-relative' onClick={handleMealsDetails} >
            <Card className='border-0 pt-3 custom-border-style mb-0 meals-cart' >
                <Card.Img variant="top" src={picture} className='mx-auto' style={{ width: '280px' }} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{description && description.slice(0, 50) + ' ...more'}</Card.Text>
                    <Card.Text>{type[0].toUpperCase() + type.substring(1)}</Card.Text>
                </Card.Body>
            </Card>
            <button onClick={handleAddToCart} className='w-100 border-0 py-2 meal-btn-add-cart position-absolute bottom-0' >Add To Cart</button>
        </div>
    );
};

export default Meal;