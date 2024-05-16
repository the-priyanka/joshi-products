import React from "react";
import "./news.css";
import MainHead from "../mainHead";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(productName, Kg, prize) {
  return { productName, Kg, prize };
}

const rows = [
  createData("Ghee (घी)", 1, 460),
  createData("Milk (दूध)", 1, 44),
  createData("Curd (दही)", 1, 70),
  createData("Buttermilk (छाछ)", 1, 20),
  createData("Paneer (पनीर)", 1, 280),
  createData("Chakka (चक्का)", 1, 200),
  createData("Mawa (मावा)", 1, 300),
  createData("Butter (मक्खन)", 1, 400),
  createData("Cow's ghee (गाय का घी)", 1, 560),
];

const News = () => {
  return (
    <>
      <MainHead
        classNames="newsContainer"
        title="JOSHI'S DAIRY PRODUCTS"
        titleh4="For Strong Bodies And For Strong Minds."
      />

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="caption table">
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell align="right">Kg / liter </TableCell>
              <TableCell align="right">Prize&nbsp;(₹)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.productName}>
                <TableCell component="th" scope="row">
                  {row.productName}
                </TableCell>
                <TableCell align="right">{row.Kg}</TableCell>
                <TableCell align="right">{row.prize}₹</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default News;
