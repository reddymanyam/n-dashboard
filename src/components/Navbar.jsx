import React from 'react';
import { Box, Button, styled, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import Searchbar from '../Pages/Searchbar/Searchbar';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import Avatar from '@mui/material/Avatar';


const CustomButton = styled(Button)({
   minWidth:"40px", width:"40px", height:"40px", color:"white", marginLeft:"15px"
})

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
          <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
             <AccountCircleOutlinedIcon />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Avatar /> My account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
         
          </CustomButton>
           <Typography variant='h6' component="h2"  color="white" sx={{paddingBottom:"4px"}}>Reddy Roy</Typography>
        </Box>
      </Box>
    </>
  );
}

export default Navbar;
