import { Box, Checkbox } from '@mui/material'
import React from 'react'
import {Post,OtherPost} from './Post'

export default function Feed() {
  return (
    <Box  flex={4} p={2}>
        
  <Post/>
  <OtherPost />
  <Post/>
  <Post/>
    </Box>
    
  )
}
