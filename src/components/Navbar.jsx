import React from 'react';
import { Box, Button, styled, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import Searchbar from '../Pages/Searchbar/Searchbar';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const CustomButton = styled(Button)({
   minWidth:"40px", width:"40px", height:"40px", color:"white", marginLeft:"15px"
})
const Navbar = () => {
  return (
    <>
      <Box 
        display="flex" 
        justifyContent="space-between"
        width="100%" 
      >
        <Box display="flex" alignItems="center" borderRadius="10px">
          <Link to="/dashboard">
            <img src={logo} alt="Home Logo" style={{ width: '150px', height: '70px' }} />
          </Link>

          <Box display="flex" flexDirection="column" alignItems="flex-start">
            <Typography
              variant="h4"
              component="h2"
              color="white"
              sx={{ fontWeight: 'bold'}} 
            >
              Signature Homes
            </Typography>
            <Searchbar />
          </Box>
        </Box>

        <Box display="flex" flexDirection="row" alignItems="flex-end" justifyContent="flex-end" >
          <CustomButton >
          <WbSunnyOutlinedIcon />
          </CustomButton>
          <CustomButton >
          <EmailOutlinedIcon />
          </CustomButton> 
          <CustomButton >
          <NotificationsNoneOutlinedIcon />
          </CustomButton>
          <CustomButton >
          <AccountCircleOutlinedIcon />
          </CustomButton>
         
        </Box>
      </Box>
    </>
  );
}

export default Navbar;
