import React from 'react';
import { Box, TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Searchbar = () => {
  return (
    <Box sx={{ width: '300px', marginLeft: '150px' }}>
      <TextField
        variant="outlined"
        placeholder="Search..."
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: '#888' }} />
            </InputAdornment>
          ),
          sx: {
            backgroundColor: 'white', // Set background color to white
            height: '32px', // Adjust height for better appearance
            borderRadius: '4px', // Add rounded corners
          },
        }}
        fullWidth
        sx={{
          input: { 
            color: 'black' // Set text color inside the input
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'black', // Set the border color (optional)
            },
            '&:hover fieldset': {
              borderColor: 'black', // Change border color on hover
            },
            '&.Mui-focused fieldset': {
              borderColor: 'black', // Change border color when focused
            },
          }
        }}
      />
    </Box>
  );
}

export default Searchbar;


