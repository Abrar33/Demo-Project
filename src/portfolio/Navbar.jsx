import { AppBar, Typography,styled,Toolbar, Box, InputBase, Badge, Avatar, Menu, MenuItem,  } from '@mui/material'
import SportsMartialArtsIcon from '@mui/icons-material/SportsMartialArts';
import React from 'react'
import Mail from '@mui/icons-material/Mail';
import Notifications from '@mui/icons-material/Notifications';
import { useState } from 'react';
const StyledToolbar=styled(Toolbar)({
  display:"flex",
  justifyContent:"space-between"
})
const Search=styled("div")(({theme})=>({
  backgroundColor:"white",
  padding:"0 10px",
  borderRadius:theme.shape.borderRadius,
  width:"40% "
}))
const Icons=styled(Box)(({theme})=>({
 display:"none"  ,
 alignItems:"center",
 gap:"20px ",
 [theme.breakpoints.up("sm")]:{
  display:'flex'
 }
}))
const UserBox=styled(Box)(({theme})=>({
  display:"flex"  ,
  alignItems:"center",
  gap:"10px ",
  [theme.breakpoints.up("sm")]:{
    display:"none",
  }
 }))
export default function Navbar() {
  const [open,setOpen]=useState(false)
  return (
    <AppBar position='sticky'>
      <StyledToolbar>
<Typography varient="h6" sx={{display:{xs:"none",sm:"block"}}}>Shapeley</Typography>
    <SportsMartialArtsIcon sx={{display:{xs:"block",sm:"none"}}}></SportsMartialArtsIcon>
      <Search><InputBase   placeholder='search...' /></Search>
      <Icons>
      <Badge badgeContent={4} color="error">
  <Mail />
</Badge>
<Badge badgeContent={2} color="error">
 <Notifications/>
</Badge>

  <Avatar 
  onClick={e=>setOpen(true)}
  />

      </Icons>
      <UserBox  onMouseOver={e=>setOpen(true)}><Avatar></Avatar></UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby='demo-positioned-button'
        open={open }
onClose={(e)=>setOpen(false)}
        anchorOrigin={{
          vertical:'top',
          horizontal:"right"
        }}
        transformOrigin={{
          vertical:"top",
          horizontal:"right"
        }}
        
      
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
      
    

    </AppBar>
  )
}
