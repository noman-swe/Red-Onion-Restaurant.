import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import './Food.css';

const Food = ({ myMeal }) => {
    const { picture, name, type, description } = myMeal;

    return (
        < CardGroup className='meals-card custom-border-style' >
            <Card className='border-0 pt-3 custom-border-style mb-0' >
                <Card.Img variant="top" src={picture} className='mx-auto' style={{ width: '280px' }} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{description && description.slice(0, 50) + ' ...more'}</Card.Text>
                    <Card.Text>{type[0].toUpperCase() + type.substring(1)}</Card.Text>
                </Card.Body>

                <button className='w-100 border-0 py-2 meal-btn-add-cart' >Add To Cart</button>

            </Card>

        </CardGroup >


    );
};

export default Food;