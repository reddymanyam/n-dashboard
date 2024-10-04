import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
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

const Image = styled('img')  ({
  width:"35%", height:'100%', display:"flex", justifyContent:"flex-start", borderRadius:"10px"
})
export default function Dashboard() {
  const Img = [home1,home2, home3,home4,home5,home6] ;
  return (
   
    <Box sx={{ flexGrow: 1 , width:"100%"}}>
     {Img.map((imagee,i) =>(
      <Grid container spacing={2} key={i}>
        <Grid size={{ xs: 12, md: 12 }} padding="10px">
          <Item elevation={6} >
            <Image  src={imagee}  />
          </Item>
        </Grid>
      </Grid>))}
    </Box>
  );
}