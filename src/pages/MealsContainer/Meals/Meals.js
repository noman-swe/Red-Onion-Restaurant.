import React from 'react';
import useFetchMeals from '../../../hooks/useFetchMeals';
import useMealFilter from '../../../hooks/useMealFilter';
import { CardGroup, Nav } from 'react-bootstrap';
import Meal from '../Meal/Meal';

const Meals = () => {
    const [meals] = useFetchMeals();
    const [breakfastMeals, lunchMeals, dinnerMeals, activeMealBreakfst, activeMealLunch, activeMealDinner, showDefault, handleMenuTabs] = useMealFilter();


    return (
        <div className='d-flex justify-content-center gap-5 my-4'>
            <div className="wrapper">

                <Nav className='d-flex justify-content-center align-items-center meals-menu-links-container'>
                    <Nav.Item
                        onClick={() => handleMenuTabs('breakfast')}
                    >
                        <Nav.Link >Breakfast</Nav.Link>
                    </Nav.Item>

                    <Nav.Item
                        onClick={() => handleMenuTabs('lunch')}
                    >
                        <Nav.Link> Lunch </Nav.Link>
                    </Nav.Item>

                    <Nav.Item
                        onClick={() => handleMenuTabs('dinner')}
                    >
                        <Nav.Link>Dinner</Nav.Link>
                    </Nav.Item>
                </Nav>

                <div className="show-meals mb-5 container">
                    <CardGroup className=''>

                        <div className={`breakfast mt-5 ${activeMealBreakfst ? 'd-show' : 'd-none'}`} >
                            {
                                breakfastMeals.map(myMeal => <Meal
                                    key={myMeal._id}
                                    myMeal={myMeal}>
                                </Meal>)
                            }
                        </div>
                        <div className={`lunch mt-5 ${activeMealLunch ? 'd-show' : 'd-none'}`} >
                            {
                                lunchMeals.map(myMeal => <Meal
                                    key={myMeal._id}
                                    myMeal={myMeal}>
                                </Meal>)
                            }
                        </div>
                        <div className={`dinner mt-5 ${activeMealDinner ? 'd-show' : 'd-none'}`} >
                            {
                                dinnerMeals.map(myMeal => <Meal
                                    key={myMeal._id}
                                    myMeal={myMeal}>
                                </Meal>)
                            }
                        </div>

                        <div className={`default-meal mt-4 ${showDefault ? 'd-show' : 'd-none'}`} >
                            {
                                breakfastMeals.map(myMeal => <Meal
                                    key={myMeal._id}
                                    myMeal={myMeal}>
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