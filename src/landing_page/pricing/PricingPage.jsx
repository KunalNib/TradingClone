import React from 'react';
import Navbar from '../Navbar';
import Hero from './Hero';
import Brokerage from './Brokerage';
import Footer from '../Footer';
import OpenAccount from '../OpenAccout';
function PricingPage() {
    return ( 
        <>
        <Hero />
        <OpenAccount />
        <Brokerage />
        </>
     );
}

export default PricingPage;