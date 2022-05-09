import React from 'react';

const NotFound = () => {
    return (
        <div className='bg-red-700 h-screen flex items-center justify-center p-10 text-white text-4xl font-mono rounded-md shadow-red-400 shadow-lg my-24'>
            <div className='text-5xl text-center'>
                <h1>404</h1>
                <h3>Page Not Found!!</h3>
            </div>
        </div>
    );
};

export default NotFound;