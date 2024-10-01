import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Box from '@mui/material/Box';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <Box display="flex" flexDirection="column" width="100%" height="100vh">

            <Box width="100%" height="75px" position="fixed" top="0" left="0" bgcolor="#004687" zIndex={1000}>
                <Navbar />
            </Box>

            <Box display="flex"  width="100%" marginTop="75px">
                
                <Box position="fixed" height="calc(100vh - 75px)" width="150px"  top="75px" left="0" bgcolor="#004687" color="white">
                    <Sidebar />
                </Box>

                <Box marginLeft="150px" left="150px" width="calc(100% - 150px)" height="calc(100vh - 75px)" overflow="auto" padding="30px" bgcolor="white" color="black">
                    <Outlet />
                </Box>

            </Box>
        </Box>
    );
}

export default Layout;

