import React from 'react';
import ChartContainer from '../ChartContainer/ChartContainer';
import Footer from '../Footer/Footer';
import Hero from '../Hero/Hero';
import Navbar from '../Navbar/Navbar';
import TableContainer from '../TableContainer/TableContainer';

const ContentContainer = () => {
    return (
        <div className='flex-1'>
            <Navbar></Navbar>
            <Hero></Hero>
            <ChartContainer></ChartContainer>
            <TableContainer></TableContainer>
            <Footer></Footer>
        </div>
    );
};

export default ContentContainer;