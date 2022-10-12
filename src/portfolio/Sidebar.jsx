import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import React from 'react'

import PersonIcon from '@mui/icons-material/Person';
import SvgIcon from '@mui/material/SvgIcon';
import Storefront from '@mui/icons-material/Storefront';
import ArticleIcon from '@mui/icons-material/Article';
import AccountBox from '@mui/icons-material/AccountBox';
import Settings from '@mui/icons-material/Settings';

import People from '@mui/icons-material/People';
import DarkMode from '@mui/icons-material/DarkMode';
import Person from '@mui/icons-material/Person';
function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

export default function Sidebar({mode,setMode}){
  return (
    <Box  flex={1} p={2} sx={{display:{xs:"none",sm:"block"}}}>
      <Box position="fixed">
          <List >
    <ListItem disablePadding>
          <ListItemButton component="a" href="#homepage">
            <ListItemIcon>
            
          <HomeIcon/>
          </ListItemIcon>
          <ListItemText primary="Homepage" />
        </ListItemButton>
        
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#homepage">
            <ListItemIcon>
            
          <ArticleIcon/>
          </ListItemIcon>
          <ListItemText primary="Pages" />
        </ListItemButton>   
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#homepage">
            <ListItemIcon> 
        <People/>
          </ListItemIcon>
          <ListItemText primary="Groups" />
        </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#homepage">
            <ListItemIcon>
            <Storefront/>
          </ListItemIcon>
          <ListItemText primary="Marketplace" />
        </ListItemButton>
        
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#homepage">
            <ListItemIcon>
            <Person/>
          </ListItemIcon>
          <ListItemText primary="Friends" />
        </ListItemButton>
        
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#homepage">
            <ListItemIcon>
            
          <Settings/>
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#homepage">
            <ListItemIcon>
          <AccountBox/>
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItemButton>
        
        </ListItem>  <ListItem disablePadding>
          <ListItemButton component="a" href="#homepage">
            <ListItemIcon>
          <DarkMode/>
          </ListItemIcon>
          <Switch onChange={e=>setMode(mode==="light"?"dark":"light")}/>
        </ListItemButton>
        
        </ListItem>
      
        
        
        
      </List>
  </Box>
    </Box>
  )
}
