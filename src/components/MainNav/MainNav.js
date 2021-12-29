import { BottomNavigation, BottomNavigationAction, Box} from '@mui/material';
import React, { useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import TheatersIcon from '@mui/icons-material/Theaters';
import TvIcon from '@mui/icons-material/Tv';
import {useNavigate} from 'react-router-dom'



const MainNav = () => {
    const [value, setValue] = React.useState(0);
    const navigate  = useNavigate();


    useEffect(()=>{
      if(value===0)navigate ('/');
      else if(value === 1) navigate ('/movies')
      else if(value === 2) navigate ('/tvseries')
      else if(value === 3) navigate ('/search')
    },
    [value, navigate ])


    return (
        <Box sx={{ width: 500 }}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          sx={{
          width:1349,
          positions:'fixed',
          bottom:0,
          backgroundColor:'#2d313a',
          zIndex:100,
        }}
        >
          <BottomNavigationAction 
          style={{color:'red'}} label="Trending" 
          icon={<WhatshotIcon />} />

          <BottomNavigationAction 
          style={{color:'red'}}  label="Movies" 
          icon={<TheatersIcon />} />

          <BottomNavigationAction 
          style={{color:'red'}}  label="TvSeries" 
          icon={<TvIcon />} />

          <BottomNavigationAction 
          style={{color:'red'}}  label="search" 
          icon={<SearchIcon />} />

        </BottomNavigation>
      </Box>
    );
};

export default MainNav;
