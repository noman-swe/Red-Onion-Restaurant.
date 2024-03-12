import React from 'react';
import useFetchMeals from '../../../hooks/useFetchMeals';

const Buttons = ({ menuItems, handleFilterMeals, setMeals }) => {
    const [meals] = useFetchMeals();

    return (
        <div className='d-flex justify-content-center mb-2'>
            {
                menuItems.map(menuButton =>
                    <button
                        onClick={() => handleFilterMeals(menuButton)}
                        key={menuButton}
                        className='btn-dark text-white p-1 px-2 mx-5 btn fw-bold'>
                        {menuButton[0].toUpperCase() + menuButton.substring(1)}
                    </button>)
            }

            <button onClick={() => setMeals(meals)} className='btn-dark text-white p-1 px-2 mx-5 btn fw-bold'>All</button>

        </div>
    );
};

export default Buttons;