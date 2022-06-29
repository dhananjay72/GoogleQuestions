import React from "react";
import Checkbox from "@mui/material/Checkbox";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import tableData from "../output.js";
import tableRow from "./tableRow.js";
import { useState, useEffect } from "react";

const getLocalItems = () => {
  let questionsList = localStorage.getItem("questionsList");
  if (questionsList) return JSON.parse(questionsList);
  else return new Array(tableData.length).fill(false);
};

export const TableF = () => {
  const [isSolved, setIsSolved] = useState(getLocalItems);

  function checkHandler(index) {
    let tt = isSolved;
    tt[index] = true;
    setIsSolved(tt);
  }

  useEffect(() => {
    localStorage.setItem("questionsList", JSON.stringify(isSolved));
  }, [isSolved]);

  return (
    <div>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Sr no</TableCell>
              <TableCell>Question</TableCell>
              <TableCell>Difficulty</TableCell>
              <TableCell>Solved</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {tableData.map((row, index) =>
              row.Name ? (
                <TableRow
                  style={{
                    backgroundColor: isSolved[index] ? "#32ff7e" : "",
                    color: "white",
                  }}
                >
                  <TableCell>{index}</TableCell>
                  <TableCell>
                    <a href={row.URL}>{row.Name}</a>
                  </TableCell>
                  <TableCell>{row.Difficulty}</TableCell>
                  <TableCell>
                    {isSolved[index] ? (
                      <Checkbox
                        defaultChecked
                        onChange={() => {
                          let tt = [...isSolved];
                          tt[index] = !tt[index];
                          setIsSolved(tt);
                        }}
                      />
                    ) : (
                      <Checkbox
                        onChange={() => {
                          let tt = [...isSolved];
                          tt[index] = !tt[index];
                          setIsSolved(tt);
                        }}
                      />
                    )}
                  </TableCell>
                </TableRow>
              ) : // <tableRow
              //   number={index}
              //   URL={row.URL}
              //   Name={row.Name}
              //   Difficulty={row.Difficulty}
              // />
              null
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
