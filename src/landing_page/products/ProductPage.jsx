import React from 'react';
import Navbar from '../Navbar';
import Hero from './Hero';
import Leftimage from './LeftImage';
import Rightimage from './RightImage';
import Universe from './Universe';
import Footer from '../Footer';
 
function ProductPage() {
    return ( 
        <>
        <Hero />
        <Leftimage />
        <Rightimage />
        <Universe />
        </>
     );
}

export default ProductPage;