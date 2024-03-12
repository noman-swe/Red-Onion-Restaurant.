import React from 'react';

const Snack = ({ meals }) => {
    return (
        <div className='container'>
            <div className="row justify-content-center">
                {
                    meals.map(meal => <div key={meal._id} className='col-md-4 col-sm-6 card my-3 border-0'>
                        <div className="card-img-top text-center">
                            <img src={meal.picture} className='w-75' alt="" />
                        </div>

                        <div className="card-body">
                            <div className="card-title fw-bold fs-4">
                                {meal.name} --- {meal.price}
                                <br />
                                {meal.type}
                            </div>
                            <div className="card-text">
                                {meal.description}
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Snack;