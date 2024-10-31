import React from 'react';

const ErrorPage = () => {
    return (
        <div className='h-screen flex flex-col justify-center items-center gap-5'>
            <h1 className='text-9xl text-violet-600 font-extrabold'>404</h1>
            <h2 className='text-7xl text-red-500'>Page Not Found</h2>
        </div>
    );
};

export default ErrorPage;