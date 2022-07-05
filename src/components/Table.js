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

const dp = Array(26);
dp[12] = "orange";
dp[4] = "green";
dp[7] = "red";
console.log(dp);

export const TableF = () => {
  const [isSolved, setIsSolved] = useState(getLocalItems);
  const [solvedQuestions, setSolvedQuestions] = useState(0);

  function checkHandler(index) {
    let tt = isSolved;
    tt[index] = true;
    setIsSolved(tt);
  }

  useEffect(() => {
    setSolvedQuestions(isSolved.filter((value) => value === true).length);
  }, []);

  useEffect(() => {
    localStorage.setItem("questionsList", JSON.stringify(isSolved));
  }, [isSolved]);

  return (
    <div style={{ width: "100%" }}>
      <div
        className="gradient-border"
        id="box"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2> {solvedQuestions} / 389 solved </h2>
      </div>
      <hr />
      <TableContainer>
        <Table
          sx={{
            width: 500,
            margin: "auto",
            minWidth: 650,
            boxShadow: "0 0 2px 2px #9E9E9E",
          }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell>
                <b>Sr.no</b>
              </TableCell>
              <TableCell>
                <b>Questions</b>
              </TableCell>
              <TableCell>
                <b>Difficulty</b>
              </TableCell>
              <TableCell>
                <b>Solved</b>
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {tableData.map((row, index) =>
              row.Name ? (
                <TableRow
                  style={{
                    backgroundColor: isSolved[index] ? "#32ff7e" : "",
                    color: "white",
                    width: "20%",
                  }}
                >
                  <TableCell>{(index + 1) / 2}</TableCell>
                  <TableCell>
                    <a href={row.URL} target="_blank" rel="noreferrer">
                      {row.Name}
                    </a>
                  </TableCell>
                  <TableCell
                    style={{
                      color: dp[row.Difficulty.charCodeAt(0) - 65],
                    }}
                  >
                    {row.Difficulty}
                  </TableCell>
                  <TableCell>
                    {isSolved[index] ? (
                      <Checkbox
                        defaultChecked
                        onChange={() => {
                          let tt = [...isSolved];
                          if (!tt[index])
                            setSolvedQuestions(solvedQuestions + 1);
                          else setSolvedQuestions(solvedQuestions - 1);
                          tt[index] = !tt[index];
                          setIsSolved(tt);
                        }}
                      />
                    ) : (
                      <Checkbox
                        onChange={() => {
                          let tt = [...isSolved];
                          if (!tt[index])
                            setSolvedQuestions(solvedQuestions + 1);
                          else setSolvedQuestions(solvedQuestions - 1);
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
