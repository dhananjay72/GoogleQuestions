import React from "react";
import TableRow from "@mui/material/TableRow";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";

export const tableRow = ({ number, URL, Name, Difficulty, Solved }) => {
  return (
    <TableRow>
      <TableCell>{number}</TableCell>
      <TableCell>
        <a href={URL}>{Name}</a>
      </TableCell>
      <TableCell>{Difficulty}</TableCell>
    </TableRow>
  );
};
