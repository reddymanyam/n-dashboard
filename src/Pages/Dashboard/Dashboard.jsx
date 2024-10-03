import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import home4 from '../../assets/home4.jpg';
import home5 from '../../assets/home5.jpg';
import home1 from '../../assets/home1.jpg';
import home2 from '../../assets/home2.jpg';
import home3 from '../../assets/home3.jpg';
import home6 from '../../assets/home6.jpg';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#ffff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height:'200px',
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export default function Dashboard() {
  return (
   

    <Box sx={{ flexGrow: 1 , width:"100%"}}>
     
      <Grid container spacing={2} padding="33px" >
      

        <Grid item xs={6} md={12} >
        <Paper elevation={6}>
          <Item >
            <img src={home4} style={{width:"38%", height:'100%', display:"flex", justifyContent:"flex-start"}} />
          </Item>
          </Paper>
        </Grid>
       
        <Grid item xs={6} md={12}>
        <Paper elevation={6}>
          <Item> <img src={home5} style={{width:"38%", height:'100%',display:"flex", justifyContent:"flex-end"}} /></Item>
          </Paper>
        </Grid>
       
        <Grid item xs={6} md={12}>
        <Paper elevation={6}>
          <Item> <img src={home1} style={{width:"38%", height:'100%',display:"flex", justifyContent:"flex-end"}} /></Item>
          </Paper>
        </Grid>
        <Grid item xs={6} md={12}>
        <Paper elevation={6}>
          <Item> <img src={home2} style={{width:"38%", height:'100%',display:"flex", justifyContent:"flex-end"}} /></Item>
          </Paper>
        </Grid>
        <Grid item xs={6} md={12}>
        <Paper elevation={6}>
          <Item> <img src={home3} style={{width:"38%", height:'100%',display:"flex", justifyContent:"flex-end"}} /></Item>
          </Paper>
        </Grid>
        <Grid item xs={6} md={12}>
        <Paper elevation={6}>
          <Item> <img src={home6} style={{width:"38%", height:'100%',display:"flex", justifyContent:"flex-end"}} /></Item>
          </Paper>
        </Grid>
        <Grid item xs={6} md={12}>
        <Paper elevation={6}>
          <Item> <img src={home5} style={{width:"38%", height:'100%',display:"flex", justifyContent:"flex-end"}} /></Item>
          </Paper>
        </Grid>
       
      </Grid>
      
    </Box>
  );
}