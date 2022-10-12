import {
  TextField,
  Avatar,
  Fab,
  Tooltip,
  Typography,
  Box,
  Modal,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import { Add as AddIcon, EmojiEmotions } from "@mui/icons-material";
import { Stack } from "@mui/system";
const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "1opx",
  marginBottom: "20px",
});
export default function Test() {
  const [open, setOpen] = useState(true);
  return (
    <>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title="Delete"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>

      <StyledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={400} height={280} bgcolor="white" p={3} borderRadius={5}>
          <Typography varient="h6" color="gray" textAlign="center">
            Create Post
          </Typography>
          <UserBox>
            <Avatar src="/images/Person3.jpg" sx={{ width: 30, height: 30 }} />
            <Typography fontWeight={500} varient="span">
              Alex hales
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            id="standard-multiline-static"
            multiline
            rows={3}
            placeholder="What's on your mind?"
            variant="standard"
          />
          <Stack direction="row" gap={1} mt>
            <EmojiEmotions />
            <EmojiEmotions />
            <EmojiEmotions />
            <EmojiEmotions />
          </Stack>
        </Box>
      </StyledModal>
    </>
  );
}
