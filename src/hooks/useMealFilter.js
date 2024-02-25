import useFetchMeals from "./useFetchMeals";

const useMealFilter = () => {
    const [meals] = useFetchMeals();

    const breakfastMeals = meals.filter(breakfast => breakfast.type === 'breakfast');
    const lunchMeals = meals.filter(lunch => lunch.type === 'lunch');
    const dinnerMeals = meals.filter(dinner => dinner.type === 'dinner');

    return ([breakfastMeals, lunchMeals, dinnerMeals]);
};

export default useMealFilter;