import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';
import useFetchMeals from '../../../hooks/useFetchMeals';

const Banner = () => {
    const [searchInputValue, setSearchInputValue] = useState('');
    const [meals] = useFetchMeals();

    const handleSearchInputOnchange = event => {
        setSearchInputValue(event.target.value);
    }

    const handleSearch = searchInput => {
        setSearchInputValue(searchInput);
    }

    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <div className='w-100 d-flex flex-column justify-content-center align-items-center banner-background-img' style={{ backgroundImage: 'url("https://i.ibb.co/HqzCSt2/bannerbackground.png")', backgroundPosition: 'center center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '90vh' }}>

                        <h3>Best food is waitting for your belly.</h3>

                        {/* searchbox  */}
                        <div className="search-box mt-2">
                            <form className='search-form' action="">
                                <input onChange={handleSearchInputOnchange} type="text" name="search-input" id="search-input" placeholder='Search your foods' value={searchInputValue} />
                                <button type='submit'>Search</button>
                            </form>
                            {/* search dropdown */}
                            <div className="dropdown">
                                {
                                    meals.filter(meal => {
                                        const searchInput = searchInputValue.toLowerCase();
                                        const filteredName = meal.name.toLowerCase();
                                        return filteredName.startsWith(searchInput) && filteredName !== searchInput;
                                    }).slice(0, 5)
                                        .map(meal =>
                                            searchInputValue &&
                                            <div
                                                onClick={() => handleSearch(meal.name)}
                                                key={meal._id}
                                                className='dropdown-row'>
                                                <p>{meal.name}</p>
                                            </div>
                                        )
                                }
                            </div>
                        </div>


                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;