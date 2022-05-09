import { RefreshIcon } from '@heroicons/react/solid';
import React from 'react';

const Spinner = () => {
    return (
        <div className='flex items-center justify-center w-screen h-screen'>
            <button className='flex items-center rounded-lg bg-gray-800 px-4 py-2 text-white'>
                <RefreshIcon className='w-5 h-5 mr-3 animate-spin text-white'></RefreshIcon>
                <span className='font-medium'>Loading...</span>
            </button>
        </div>
    );
};

export default Spinner;