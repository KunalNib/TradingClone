import React from 'react';


function Hero() {
    return (
        <div className='conatainer-lg mx-auto mb-5'>
            <div className='row text-center mt-5  mx-auto'>
                <img  src='/media/homeHero.png' alt='Hero Image' className='mb-5 col-lg-8 mx-auto '/>
                <h1 className=' mt-4 mb-2 text-dark'>
                    Invest in everything
                </h1>
                <p className=' mt-2 mb-3 fs-5 '>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button className='btn mb-5 btn-primary mt-3 mx-auto fs-5 pb-2 col-5 col-sm-3 col-md-3 col-lg-2'>Sign up now</button>
            </div>
        </div>
    );
}

export default Hero;