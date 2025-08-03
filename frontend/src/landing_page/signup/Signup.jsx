import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import OpenAccount from '../OpenAccout';

function Signup() {
    return ( 
    <>
    <div className='container-lg text-center mt-5' >
        <p>&nbsp;</p>
        <h2 >Open a free demat and trading account online</h2>
        <p className='fs-5 text-muted'>Start investing brokerage free and join a community of 1.6+ crore investors and traders</p>
        <div >
            <h2>Signup now</h2>
            <p>Or track your existing application</p>
            
        </div>
    </div>
    <OpenAccount />
    </> );
}

export default Signup;