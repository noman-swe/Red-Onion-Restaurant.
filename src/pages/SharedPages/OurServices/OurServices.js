import React from 'react';
import { CardGroup } from 'react-bootstrap';
import serviceImg1 from '../../../images/services/adult-blur-blurred-background-687824.png';
import serviceImg2 from '../../../images/services/chef-cook-food-33614.png';
import serviceImg3 from '../../../images/services/architecture-building-city-2047397.png';
import Service from './Service/Service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruckFront, faTruck, faBell } from '@fortawesome/free-solid-svg-icons';
import './Service/Service.css';


const OurServices = () => {

    const fontTruck = <FontAwesomeIcon icon={faTruckFront} />
    const sideTruck = <FontAwesomeIcon icon={faTruck} />
    const bell = <FontAwesomeIcon icon={faBell} />

    const OurServices = [
        { id: "services_1", name: 'Fast Delivery', img: serviceImg1, description: 'Keep your systems in sync with automated wev hook based notifications each time link is paid and how we dream about our future.', icon: fontTruck },

        { id: "services_2", name: 'A Good Auto Responder', img: serviceImg2, description: 'Keep your systems in sync with automated wev hook based notifications each time link is paid and how we dream about our future.', icon: bell },

        { id: "services_3", name: 'Hone Delivery', img: serviceImg3, description: 'Keep your systems in sync with automated wev hook based notifications each time link is paid and how we dream about our future.', icon: sideTruck }
    ]
    return (
        <div className='container pt-4'>
            <div className="services-info w-50 mb-5">
                <h3>Why you choose us</h3>
                <p className='my-4'>Barton waited twenty always repair in within we do. An delighted offering curiosity my dashwoods at. Boy prosperous increasing surrounded.</p>
            </div>

            <CardGroup className='ms-3 mb-3'>
                {
                    OurServices.map(service =>
                        <Service
                            key={service.id}
                            service={service}
                        >

                        </Service>)
                }
            </CardGroup>

        </div>
    );
};

export default OurServices;