import React from 'react';
import Banner from '../SharedPages/Banner/Banner';
import Foods from '../FoodsContainer/Foods/Foods';
import OurServices from '../SharedPages/OurServices/OurServices';
import Footer from '../SharedPages/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
          
            <Foods></Foods>
            <OurServices></OurServices>
            <Footer></Footer>
        </div>
    );
};

export default Home;