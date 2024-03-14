import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import MealDetails from '../../MealsContainer/MealDetails/MealDetails';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Snack.css';
import { addToDb } from '../../../utilities/saveToLocal';


const Snack = ({ meals }) => {
    const [activeBtnForMealDetails, setActiveBtnForMealDetails] = useState(false);
    const [showMeal, setShowMeal] = useState({});

    // toast message
    const notify = () => toast("Food Added To Cart.");

    const handleMealsDetails = (clickedMeal) => {
        setActiveBtnForMealDetails(true);
        setShowMeal(clickedMeal);
    }

    // add to cart function
    const handleAddToCart = clickedMeal => {
        // console.log('clicked Id:', selectedId);
        // const fullMeal = meals.filter(meal => meal._id === clickedMeal._id);
        // console.log('fullmeal:', fullMeal);

        // notify();
        console.log(clickedMeal._id);
        addToDb(clickedMeal._id);
    }

    return (
        <div className='container my-4 border-1'>
            <ToastContainer
                position="top-center"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            // transition: Zoom,
            />

            {/* show meal details start */}
            <div className="container">
                {activeBtnForMealDetails && <MealDetails
                    className='mt-5'
                    showMeal={showMeal}
                    handleAddToCart={handleAddToCart}                >
                </MealDetails>}
            </div>
            {/* show meal details end */}

            <div className="row justify-content-center">
                {
                    meals.map(meal => <Card
                        onClick={() => handleMealsDetails(meal)}
                        key={meal._id}
                        className='col-md-4 col-sm-6 card my-3 mx-3 p-0'
                        style={{ width: '20rem' }}
                    >
                        <div className="card-img-top mt-3 text-center">
                            <img src={meal.picture} className='w-75' alt="" />
                        </div>

                        <div className="card-body">
                            <div className="card-title fw-bold fs-4">
                                {meal.name} --- {meal.price}
                                <br />
                                {meal.type}
                            </div>
                            <div className="card-text">
                                {meal.description && meal.description.slice(0, 50) + ' ...more'}
                            </div>
                        </div>
                        <button onClick={() => handleAddToCart(meal)} className='border-0 w-100 m-0 py-1 btn-add-cart'>Add To Cart</button>
                    </Card>)
                }
            </div>
        </div>
    );
};

export default Snack;