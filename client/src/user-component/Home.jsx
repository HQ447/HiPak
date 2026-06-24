import React from 'react';

const Home = () => {
    return (
        <div className="home">

            <div className='grid grid-cols-1 md:grid-cols-3 px-5 sm:px-10 md:px-20'>
                <div className="left bg-indigo-500 order-2 md:order-1">Ali</div>
                <div className="right col-span-2 bg-amber-500 order-1 md:order-2">Ahmad</div>

            </div>
        </div>
    );
};

export default Home;
