import { useEffect, useState } from "react";

const useFetchMeals = () => {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        fetch('meals.json')
            .then(res => res.json())
            .then(data => setMeals(data))
    }, []);

    return ([meals, setMeals]);
};

export default useFetchMeals;