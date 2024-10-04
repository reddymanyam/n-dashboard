import React from 'react';
import { Grid, Paper } from '@mui/material';
import { styled } from '@mui/system';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  border: '2px solid #000',
  borderRadius: '8px',
  padding: theme.spacing(2),
  textAlign: 'center',
  color: '#fff',
  fontSize: '24px',
  fontWeight: 'bold',
  height: '100%', // Ensure the grid item takes full height
}));

export default function CustomGrid() {
  return (
    <Grid container spacing={2} style={{ height: '100vh', padding: '20px', backgroundColor: '#2a2f5e' }}>
      {/* First column, Green spanning 2 rows */}
      <Grid item xs={12} sm={4} style={{ gridRow: 'span 2' }}>
        <Item style={{ backgroundColor: '#4caf50' }}>1</Item>
      </Grid>

      {/* Second column, upper Green box */}
      <Grid item xs={12} sm={4}>
        <Item style={{ backgroundColor: '#4caf50' }}>2</Item>
      </Grid>

      {/* Third column, upper Red box */}
      <Grid item xs={12} sm={4}>
        <Item style={{ backgroundColor: '#f44336' }}>3</Item>
      </Grid>

      {/* Second column, middle Orange box */}
      <Grid item xs={12} sm={4}>
        <Item style={{ backgroundColor: '#ff9800' }}>4</Item>
      </Grid>

      {/* Third column, middle Red box */}
      <Grid item xs={12} sm={4}>
        <Item style={{ backgroundColor: '#f44336' }}>5</Item>
      </Grid>

      {/* First column, Green box spanning 2 rows */}
      <Grid item xs={12} sm={4} style={{ gridRow: 'span 2' }}>
        <Item style={{ backgroundColor: '#4caf50' }}>6</Item>
      </Grid>

      {/* Second column, bottom Orange box */}
      <Grid item xs={12} sm={4}>
        <Item style={{ backgroundColor: '#ff9800' }}>7</Item>
      </Grid>

      {/* Third column, bottom Red box */}
      <Grid item xs={12} sm={4}>
        <Item style={{ backgroundColor: '#f44336' }}>8</Item>
      </Grid>
    </Grid>
  );
}
