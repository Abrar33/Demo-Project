import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
} from "@mui/material";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import { padding } from "@mui/system";
export default function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton size="large" edge="start">
          <CatchingPokemonIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Shapley
        </Typography>

        <Stack direction="row" spacing={2}>
          <Button color="inherit">Hoome</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Features</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
