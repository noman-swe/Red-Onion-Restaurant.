import { useState } from "react";
import useFetchMeals from "./useFetchMeals";

const useMealFilter = () => {
    const [meals] = useFetchMeals();
    const [activeMealBreakfst, setActiveMealBreakfast] = useState(false);
    const [activeMealLunch, setActiveMealLunch] = useState(false);
    const [activeMealDinner, setActiveMealDinner] = useState(false);
    const [myMeals, setMyMeals] = useState([]);
    const [showDefault, setShowDefault] = useState(true);

    const breakfastMeals = meals.filter(breakfast => breakfast.type === 'breakfast');
    const lunchMeals = meals.filter(lunch => lunch.type === 'lunch');
    const dinnerMeals = meals.filter(dinner => dinner.type === 'dinner');


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
    return ([breakfastMeals, lunchMeals, dinnerMeals, activeMealBreakfst, activeMealLunch, activeMealDinner, myMeals, showDefault, handleMenuTabs]);
};

export default useMealFilter;