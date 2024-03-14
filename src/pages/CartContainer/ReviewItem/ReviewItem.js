import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const ReviewItem = ({ meal, handleRemoveMeal }) => {
    const { picture, name, price, quantity } = meal;
    // console.log(meal.name);
    return (
        <div className='review-order container '>
            <div className="row w-100 d-flex">
                <div className="m-4 rounded d-flex align-items-center border py-3 px-4">
                    <div className='w-50 text-center'>
                        {/* <img className='md:w-24 w-12 h-18' src=''  alt="img" /> */}
                        <img src={picture} className='w-75' alt="" />
                        <p className='product-name fw-semibold' title={name}> {name?.length > 20 ? name.slice(0, 15) + '...' : name} </p>

                    </div>

                    <div className="review-item-info w-100 d-flex justify-content-between align-items-center">

                        <div className="review-details ms-3">
                            <p>Price: {price}</p>
                            {/* <p><small>Shipping Charge : ${shipping}</small></p> */}
                            {/* <p><small>Quantity : {quantity}</small></p> */}
                        </div>

                        <div className="btn-del mr-0 mt-3">
                            <button className='delete-button text-3xl text-red-600 bg-red-300 hover:bg-red-400 w-12 h-12' style={{ 'borderRadius': '50%' }} onClick={() => handleRemoveMeal(meal)}>
                                <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="col-6 mx-auto"><Link to={'/shipment'} className='text-decoration-none bg-warning py-1 px-3 rounded'> ProccedCheckOut</Link>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;