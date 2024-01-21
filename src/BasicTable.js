import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function BasicTable({ records }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>Album Title</TableCell>
            <TableCell align='right'>Artist</TableCell>
            <TableCell align='right'>Bringer</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {records.map((record) => (
            <TableRow
              key={record.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell component='th' scope='row'>
                {record.title}
              </TableCell>
              <TableCell align='right'>{record.artist}</TableCell>
              <TableCell align='right'>{record.bringer}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
