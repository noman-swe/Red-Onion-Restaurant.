import React from 'react';
import { Card, Nav } from 'react-bootstrap';
import './Service.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import './Service.css';

const Service = (props) => {
    const { name, img, description, icon } = props.service;
    return (
        <Card className='border-0 me-4'>
            <Card.Img variant="top" src={img} />
            <div className="card-info d-flex">
                <span className='service-icon  mt-3'>{icon}</span>
                <Card.Body>
                    <Card.Title>
                        {name}
                    </Card.Title>

                    <Card.Text className='mb-0'>
                        {description}
                    </Card.Text>

                    <Nav>
                        <Nav.Link className='ps-0'>See more <FontAwesomeIcon className='arrow-icon' icon={faCircleArrowRight} /> </Nav.Link>
                    </Nav>
                </Card.Body>
            </div>
        </Card >
    );
};

export default Service;