import React from 'react';
import useFetchMeals from '../../../hooks/useFetchMeals';
import Snack from '../Snack/Snack';
import Buttons from '../Buttons/Buttons';

const Snacks = () => {
    const [meals, setMeals] = useFetchMeals();
    const menuItems = [...new Set(meals.map(meal => meal.type))];

    const handleFilterMeals = mealType => {
        const newFilterMeals = meals.filter(filterMeal => filterMeal.type === mealType);
        setMeals(newFilterMeals);
    }

    return (
        <div className='container'>
            <div className="row">
                <h1 className="text-center col-12 fw-bold mt-3 mb-5">Foods</h1>
                <Buttons
                    menuItems={menuItems}
                    handleFilterMeals={handleFilterMeals}
                    setMeals={setMeals} //this is for all meals options
                ></Buttons>
                <Snack meals={meals}></Snack>
            </div>
        </div>
    );
};

export default Snacks;