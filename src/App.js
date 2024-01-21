import "./App.css";
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
import BasicTable from "./BasicTable";
import SearchArea from "./SearchArea";

let fe_test_records = [
  {
    id: 1,
    title: "The Dark Side of the Moon",
    artist: "Pink Floyd",
    bringer: "John Doe",
  },
  {
    id: 2,
    title: "Thriller",
    artist: "Michael Jackson",
    bringer: "Jane Smith",
  },
  {
    id: 3,
    title: "Abbey Road",
    artist: "The Beatles",
    bringer: "Bob Johnson",
  },
];

function App() {
  const [page, setPage] = React.useState(0);
  return (
    <div className='App'>
      <Stack padding={10} spacing={2}>
        <Stack direction='row' spacing={2}>
          <Button
            variant={page === 0 ? "contained" : "outlined"}
            onClick={() => setPage(0)}>
            Button 1
          </Button>
          <Button
            variant={page === 1 ? "contained" : "outlined"}
            onClick={() => setPage(1)}>
            Button 2
          </Button>
          <Button
            variant={page === 2 ? "contained" : "outlined"}
            onClick={() => setPage(2)}>
            Button 3
          </Button>
        </Stack>
        {page === 0 ? <SearchArea records={fe_test_records} /> : null}
        <Stack spacing={2}>
          <BasicTable records={fe_test_records} />
        </Stack>
      </Stack>
    </div>
  );
}

export default App;
