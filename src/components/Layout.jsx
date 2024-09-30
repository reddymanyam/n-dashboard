import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Box from '@mui/material/Box';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <Box display="flex" flexDirection="column" width="100%" height="100vh">

            <Box width="100%" height="60px" position="fixed" top="0" left="0" bgcolor="lightblue" zIndex={1000}>
                <Navbar />
            </Box>

            <Box display="flex"  width="100%" marginTop="60px">
                
                <Box position="fixed" height="calc(100vh - 60px)" width="150px" bgcolor="lightblue" top="60px" left="0">
                    <Sidebar />
                </Box>

                <Box marginLeft="150px" left="150px" width="calc(100% - 150px)" height="calc(100vh - 60px)" overflow="auto" padding="30px" bgcolor="black" color="white">
                    <Outlet />
                </Box>

            </Box>
        </Box>
    );
}

export default Layout;

