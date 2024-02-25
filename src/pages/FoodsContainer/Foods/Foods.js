import React, { useState } from 'react';
import Food from '../Food/Food';
import useFetchMeals from '../../../hooks/useFetchMeals';
import Nav from 'react-bootstrap/Nav';
import './Foods.css';

const Foods = () => {
    const [activeMealBreakfst, setActiveMealBreakfast] = useState(false);
    const [activeMealLunch, setActiveMealLunch] = useState(false);
    const [activeMealDinner, setActiveMealDinner] = useState(false);
    const [myMeals, setMyMeals] = useState([]);
    const [meals] = useFetchMeals();
    const [showDefault, setShowDefault] = useState(true);

    let breakfastMeals = meals.filter(breakfast => breakfast.type === 'breakfast');
    let lunchMeals = meals.filter(lunch => lunch.type === 'lunch');
    let dinnerMeals = meals.filter(dinner => dinner.type === 'dinner');

    const handleMenuTabs = (type) => {
        if (type === 'breakfast') {
            setMyMeals(breakfastMeals);
            setActiveMealBreakfast(true);
            setActiveMealLunch(false);
            setActiveMealDinner(false);
        }

        if (type === 'lunch') {
            setMyMeals(lunchMeals);
            setActiveMealLunch(true);
            setActiveMealBreakfast(false);
            setActiveMealDinner(false);
        }

        if (type === 'dinner') {
            setMyMeals(dinnerMeals);
            setActiveMealDinner(true);
            setActiveMealLunch(false);
            setActiveMealBreakfast(false);
        }
        setShowDefault(false);
    }

    return (
        <div className='d-flex justify-content-center gap-5 my-4'>
            <div className="wrapper">
                
                <Nav  className='d-flex justify-content-center align-items-center meals-menu-links-container'>
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
                    <div className={`breakfast mt-5 ${activeMealBreakfst ? 'd-show' : 'd-none'}`} >
                        {
                            myMeals.map(myMeal => <Food
                                key={myMeal._id}
                                myMeal={myMeal}>
                            </Food>)
                        }
                    </div>
                    <div className={`lunch mt-5 ${activeMealLunch ? 'd-show' : 'd-none'}`} >
                        {
                            myMeals.map(myMeal => <Food
                                key={myMeal._id}
                                myMeal={myMeal}>
                            </Food>)
                        }
                    </div>
                    <div className={`dinner mt-5 ${activeMealDinner ? 'd-show' : 'd-none'}`} >
                        {
                            myMeals.map(myMeal => <Food
                                key={myMeal._id}
                                myMeal={myMeal}>
                            </Food>)
                        }
                    </div>

                    <div className={`default-meal mt-4 ${showDefault ? 'd-show' : 'd-none'}`} >
                        {
                            breakfastMeals.map(myMeal => <Food
                                key={myMeal._id}
                                myMeal={myMeal}>
                            </Food>)
                        }

                    </div>
                </div>
                <div className="mx-auto text-center">
                    <button className=' border-0 btn-checkout'>Checkout Your Food</button>
                </div>
            </div>

        </div>
    );
};

export default Foods;