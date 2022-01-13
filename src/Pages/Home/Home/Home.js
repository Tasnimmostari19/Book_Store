import React from 'react';
import Detail from '../../Detail/Detail/Detail';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';


const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner />
            <Products />
            <Detail />
            <Footer></Footer>

        </div>
    );
};

export default Home;