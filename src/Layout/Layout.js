import React from 'react';
import ContentContainer from '../Components/ContentContainer/ContentContainer';
import Menubar from '../Components/Menubar/Menubar';

const Layout = () => {
    return (
        <div className='flex'>
            <Menubar></Menubar>
            <ContentContainer></ContentContainer>
        </div>
    );
};

export default Layout;