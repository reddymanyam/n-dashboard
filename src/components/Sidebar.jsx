import * as React from 'react';
import { styled } from '@mui/material';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DraftsIcon from '@mui/icons-material/Drafts';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import BookOnlineOutlinedIcon from '@mui/icons-material/BookOnlineOutlined';
import AirplaneTicketOutlinedIcon from '@mui/icons-material/AirplaneTicketOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import { Link } from 'react-router-dom';

const CustomListItemIcon = styled(ListItemIcon)({
  minWidth: "40px",
  color:"white"
})

export default function Sidebar() {
  return (
    <Box left="0"  position="fixed" >
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/dashboard">
              <CustomListItemIcon>
                <DashboardOutlinedIcon />
              </CustomListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/tickets">
              <CustomListItemIcon>
                <AirplaneTicketOutlinedIcon />
              </CustomListItemIcon>
              <ListItemText primary="Tickets" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/listings">
              <CustomListItemIcon>
                <ListAltOutlinedIcon />
              </CustomListItemIcon>
              <ListItemText primary="Listings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/invoices">
              <CustomListItemIcon>
                <DraftsIcon />
              </CustomListItemIcon>
              <ListItemText primary="Invoices" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/bookings">
              <CustomListItemIcon>
                <BookOnlineOutlinedIcon />
              </CustomListItemIcon>
              <ListItemText primary="Bookings" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
}

