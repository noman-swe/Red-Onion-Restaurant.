import React from 'react';
import Banner from '../SharedPages/Banner/Banner';
// import Foods from '../FoodsContainer/Foods/Foods';
import OurServices from '../SharedPages/OurServices/OurServices';
import Footer from '../SharedPages/Footer/Footer';
// import Meals from '../MealsContainer/Meals/Meals';
import Snacks from '../SnacksContainer/Snacks/Snacks';

const Home = () => {
    return (
        <div>
            <Banner></Banner>

            {/* <Foods></Foods> */}
            {/* <Meals></Meals> */}
            <Snacks></Snacks>
            <OurServices></OurServices>
            <Footer></Footer>
        </div>
    );
};

export default Home;