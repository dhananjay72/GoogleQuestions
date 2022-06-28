import React from "react";

import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import tableData from "../output.js";

export const TableF = () => {
  return (
    <div>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Question</TableCell>
              <TableCell>Difficulty</TableCell>
              <TableCell>Solved</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {tableData.map((row, index) =>
              row.Name ? (
                <TableRow>
                  <TableCell>{row.URL}</TableCell>
                  <TableCell>{row.Name}</TableCell>
                </TableRow>
              ) : null
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
