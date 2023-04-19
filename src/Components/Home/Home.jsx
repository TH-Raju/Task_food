import React from 'react';
import Banner from './Banner';
import PriceCard from './PriceCard';
import Cart from './Cart';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PriceCard></PriceCard>
            <Cart></Cart>
        </div>
    );
};

export default Home;