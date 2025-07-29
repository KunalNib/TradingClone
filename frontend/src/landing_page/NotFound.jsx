import React from 'react';

function NotFound() {
    return (
        <div className='conatainer-lg mx-auto mb-5'>
            <div className='row text-center mt-5  mx-auto'>
                <h1 className=' mt-4 mb-2 text-dark '>
                    404 Not Found
                </h1>
                <p className=' mt-2 mb-3 fs-5 '>Sorry,the page you are looking for does not exist</p>
            </div>
        </div>
    );
}

export default NotFound;