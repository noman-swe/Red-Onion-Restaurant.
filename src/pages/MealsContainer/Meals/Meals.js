import React, { createContext, useState } from 'react';
import useMealFilter from '../../../hooks/useMealFilter';
import { CardGroup, Nav } from 'react-bootstrap';
import Meal from '../Meal/Meal';
import './Meals.css';
import MealDetails from '../MealDetails/MealDetails';
import useFetchMeals from '../../../hooks/useFetchMeals';
import { addToDb } from '../../../utilities/saveToLocal';


const Meals = () => {
    const [breakfastMeals, lunchMeals, dinnerMeals, activeMealBreakfst, activeMealLunch, activeMealDinner, showDefault, handleMenuTabs] = useMealFilter();
    const [meals] = useFetchMeals();
    const [activeBtnForMealDetails, setActiveBtnForMealDetails] = useState(false);
    const [showMeal, setShowMeal] = useState({});

    const handleMealsDetails = (clickedMeal) => {
        // console.log(clickedMeal);
        // console.log(clickedMeal._id);
        setActiveBtnForMealDetails(true);
        setShowMeal(clickedMeal);
    }

    const handleAddToCart = (cartCickedId) => {
        const mealId = meals.find(meal => meal.id === cartCickedId.id);
        // console.log(mealId);
        // addToDb(cartCickedId._id);
    }

    return (
        <div className='d-flex justify-content-center gap-5 my-4'>
            <div className="wrapper">
                <Nav className='d-flex justify-content-center align-items-center meals-menu-links-container mb-4'>
                    <Nav.Item
                        onClick={() => handleMenuTabs('breakfast')}>
                        <Nav.Link >Breakfast</Nav.Link>
                    </Nav.Item>

                    <Nav.Item
                        onClick={() => handleMenuTabs('lunch')}>
                        <Nav.Link> Lunch </Nav.Link>
                    </Nav.Item>

                    <Nav.Item
                        onClick={() => handleMenuTabs('dinner')}>
                        <Nav.Link>Dinner</Nav.Link>
                    </Nav.Item>
                </Nav>

                {/* show meal details start */}

                <div className="container">
                    {activeBtnForMealDetails && <MealDetails
                        className='mt-5'
                        showMeal={showMeal}
                    >
                    </MealDetails>}

                </div>
                {/* show meal details end */}

                <div className="show-meals mb-5 container">
                    <CardGroup>
                        <div className={`breakfast mt-5 ${activeMealBreakfst ? 'd-show' : 'd-none'}`} >
                            {
                                breakfastMeals.map(myMeal => <Meal
                                    key={myMeal._id}
                                    myMeal={myMeal}
                                    handleMealsDetails={handleMealsDetails}
                                    handleAddToCart={handleAddToCart}
                                >
                                </Meal>)
                            }
                        </div>

                        <div className={`lunch mt-5 ${activeMealLunch ? 'd-show' : 'd-none'}`} >
                            {
                                lunchMeals.map(myMeal => <Meal
                                    key={myMeal._id}
                                    myMeal={myMeal}
                                    handleMealsDetails={handleMealsDetails}
                                    handleAddToCart={handleAddToCart}>
                                </Meal>)
                            }
                        </div>
                        <div className={`dinner mt-5 ${activeMealDinner ? 'd-show' : 'd-none'}`} >
                            {
                                dinnerMeals.map(myMeal => <Meal
                                    key={myMeal._id}
                                    myMeal={myMeal}
                                    handleMealsDetails={handleMealsDetails}
                                    handleAddToCart={handleAddToCart}>
                                </Meal>)
                            }
                        </div>

                        <div className={`default-meal mt-4 ${showDefault ? 'd-show' : 'd-none'}`} >
                            {
                                breakfastMeals.map(myMeal => <Meal
                                    key={myMeal._id}
                                    myMeal={myMeal}
                                    handleMealsDetails={handleMealsDetails}
                                    handleAddToCart={handleAddToCart}>
                                </Meal>)
                            }

                        </div>
                    </CardGroup>
                </div>
                <div className="mx-auto text-center">
                    <button className=' border-0 btn-checkout'>Checkout Your Food</button>
                </div>
            </div>

        </div >
    );
};

export default Meals;