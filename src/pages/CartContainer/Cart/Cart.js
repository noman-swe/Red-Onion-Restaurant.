import React, { useEffect, useState } from 'react';
import { getStoredCart, removeFromDb } from '../../../utilities/saveToLocal';
import useFetchMeals from '../../../hooks/useFetchMeals';
import { useNavigate } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';

const Cart = () => {
    const [cart, setCart] = useState([]);
    const [meals] = useFetchMeals();
    // const navigate = useNavigate();

    useEffect(() => {
        const saveCart = [];
        const storedCart = getStoredCart();
        for (const id in storedCart) {
            const addeedMeal = meals.find(meal => meal._id === id);
            if (addeedMeal) {
                const qunatity = storedCart[id];
                addeedMeal.qunatity = qunatity;
                saveCart.push(addeedMeal);
            }
        }

        setCart(saveCart);
        

    }, [meals]);


    // handle remove meals
    const handleRemoveMeal = clickedMeal => {
        const rest = cart.filter(meal => meal._id !== clickedMeal._id);
        setCart(rest);
        removeFromDb(clickedMeal._id);
    }

    return (
        <div className='orders-container d-flex justify-content-between  my-4 '>
            <div className="review-items-container w-25 mx-auto">
                {
                    cart.map(meal => <ReviewItem
                        meal={meal}
                        key={meal._id}
                        handleRemoveMeal={handleRemoveMeal}
                    >
                    </ReviewItem>)
                }
            </div>
            {/* <div className="cart-container  w-75 mx-auto py-4" style={{ 'backgroundColor': '#EBD8D1' }}>
                <div className="px-2">
                    <button className='' onClick={() => navigate('/home')}>Proceed Checkout</button>
                </div>
            </div> */}
        </div>
    );
};

export default Cart;