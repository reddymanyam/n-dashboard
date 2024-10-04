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
  marginTop:"10px",
  transition:"background-color 0.3s ease",
 '&:hover':{ 
   backgroundColor:"lightblue",

 },
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

const Image = styled('img')  ({
  width:"35%", height:'100%', display:"flex", justifyContent:"flex-start", borderRadius:"10px"
})

const Image1 = styled('img')({
  width:"100%", height:"50%", borderRadius:"10px"
})

export default function Dashboard() {
  return (
    <Box sx={{display:"flex", flexGrow: 1 , width:"100%"}}>
      <Box sx={{width:"70%"}}>
      <Grid  padding="15px" >
      
        <Grid item xs={6} md={8} >
        <Paper elevation={6}>
          <Item >
            <Image src={home4}  />
          </Item>
          </Paper>
        </Grid>
        
       
        <Grid item xs={6} md={8}>
        <Paper elevation={6}>
          <Item> <Image src={home5}  /></Item>
          </Paper>
        </Grid>
       
        <Grid item xs={6} md={8}>
        <Paper elevation={6}>
          <Item> <Image src={home1}  /></Item>
          </Paper>
        </Grid>
        <Grid item xs={6} md={8}>
        <Paper elevation={6}>
          <Item> <Image src={home2}  /></Item>
          </Paper>
        </Grid>
        <Grid item xs={6} md={8}>
        <Paper elevation={6}>
          <Item> <Image src={home3}  /></Item>
          </Paper>
        </Grid>
        <Grid item xs={6} md={8}>
        <Paper elevation={6}>
          <Item> <Image src={home6}  /></Item>
          </Paper>
        </Grid>
        <Grid item xs={6} md={8}>
        <Paper elevation={6}>
          <Item> <Image src={home5}  /></Item>
          </Paper>
        </Grid>
        <Grid item xs={6} md={8}>
        <Paper elevation={6}>
          <Item> <Image src={home1}  /></Item>
          </Paper>
        </Grid>
       
      </Grid>
      </Box>
      <Box sx={{width:"30%",padding:"5px",marginTop:"9px"}}>
      <Grid item xs={6} md={8} >
        <Paper elevation={6}>
          <Item sx={{height:"420px"}}> <Image1 src={home6} /></Item>
          </Paper>
        </Grid>
        <Grid item xs={6} md={8} >
        <Paper elevation={6}>
          <Item sx={{height:"420px"}}> <Image1 src={home1}/></Item>
          </Paper>
        </Grid>
        <Grid item xs={6} md={8} >
        <Paper elevation={6}>
          <Item sx={{height:"420px"}}> <Image1 src={home4}  /></Item>
          </Paper>
        </Grid>
        <Grid item xs={6} md={8}>
        <Paper elevation={6}>
          <Item sx={{height:"420px"}}> <Image1 src={home2}  /></Item>
          </Paper>
        </Grid>
      </Box>
    </Box>
  );
}