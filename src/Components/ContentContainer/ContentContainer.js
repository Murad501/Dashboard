import React from 'react';
import Hero from '../Hero/Hero';
import Navbar from '../Navbar/Navbar';

const ContentContainer = () => {
    return (
        <div className='flex-1'>
            <Navbar></Navbar>
            <Hero></Hero>
        </div>
    );
};

export default ContentContainer;