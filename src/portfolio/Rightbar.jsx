 import { Avatar, AvatarGroup, Box,
  ImageList, ImageListItem, Typography,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider
   } from '@mui/material'
import React from 'react'
 

import SvgIcon from '@mui/material/SvgIcon';

function HomeIcon(props) {
  return (
    <SvgIcon {...props}> 
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

export default function Rightbar (){
   return (
     <Box flex={2} p={2}  sx={{display:{xs:"none",sm:"block"}}}>
      <Box position="fixed" >
        <Typography varient="h6"fontWeight={100}>Online Friends</Typography>
        <AvatarGroup max={7}>
  <Avatar alt="Remy Sharp" src="/images/Person1.jpg" />
  <Avatar alt="Travis Howard" src="/images/Person2.jpg" />
  <Avatar alt="Cindy Baker" src="/images/Person3.jpg" />
  <Avatar alt="Agnes Walker" src="/images/Person4.jpg" />
  <Avatar alt="Trevor Henderson" src="/images/Person5.jpg" />
  <Avatar alt="Agnes Walker" src="/images/Person6.jpg" />
  <Avatar alt="Trevor Henderson" src="/images/Person7.jpg" />
  <Avatar alt="Agnes Walker" src="/images/Person1.jpg" />  
</AvatarGroup>
<Typography varient="h6" fontWeight={100} mt={2} mb={2}>Latest Photos</Typography>
        <ImageList cols={3} rowHeight={100} gap={3}>
          <ImageListItem>
            <img src='/images/Person4.jpg'
            alt=""
            />
          </ImageListItem>
        
          <ImageListItem>
            <img src='/images/water.jpg'
            alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img src='/images/Person4.jpg'
            alt=""       />
          </ImageListItem>
        </ImageList>
        <Typography variant='h6' fontWeight={100} mt={2} mb={2}>
          Latest Conversation 
        </Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/images/Person4.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/images/Person2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
        </Box> 

     </Box>
   )
 }
 