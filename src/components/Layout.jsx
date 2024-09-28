import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Box from '@mui/material/Box';


const Layout = ({ children }) => {
    return (
        <Box display="flex" >

            <Box width="150px" height="100vh" top="0" left="0" bgcolor="blue" position="fixed" >
                <Sidebar />
            </Box>
            <Box width="calc(100% - 150px)" marginLeft="150px"   position="relative" >
                <Box position="fixed" top="0" height="50px" left="150px" width="calc(100% - 150px)" bgcolor="green">
                    <Navbar />
                </Box>

                <Box padding="20px" marginTop="50px" height="calc(100vh - 50px)" overflow="auto" >
                    {children}
                </Box>
            </Box>
        </Box>
    )
}

export default Layout
