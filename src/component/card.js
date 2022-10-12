import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

export default function MultiActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 1363 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="640"
          img="images/water.jpg"
        ></CardMedia>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary"></Button>
      </CardActions>
    </Card>
  );
}
