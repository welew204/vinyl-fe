import React from "react";
import {
  Stack,
  Button,
  TextField,
  Grid,
  Card,
  CardActions,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

export default function SearchArea({ records }) {
  return (
    <Stack spacing={2} direction='row'>
      <Stack justifyContent='center'>
        <TextField
          id='outlined-basic'
          helperText='Enter an album, artist, or keyword...'
          label='Search'
          variant='outlined'
        />
        <Button variant='contained'>Search</Button>
      </Stack>

      <Grid
        container
        variant='outlined'
        justifyContent='center'
        alignItems='center'
        spacing={5}>
        {records.map((album, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card variant='outlined'>
              <CardMedia
                component='img'
                height='140'
                image={album.imageUrl}
                alt={album.title}
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  {album.title}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  {album.artist}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size='small' color='primary'>
                  Bring!!
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}
