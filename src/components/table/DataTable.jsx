import React from "react";
import "./DataTable.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import BorderColorRoundedIcon from "@mui/icons-material/BorderColorRounded";

const DataTable = ({ setIsDeleteModal, setDeleteUserName }) => {
  const TableData = [
    {
      id: 1,
      name: "Sunny",
      address: "28, Amraiwadi",
      email: "sunny@mail.com",
      mobile: 1234567890,
      gender: "Male",
      city: "Ahmedabad",
    },
    {
      id: 2,
      name: "Ayush",
      address: "55, Memco",
      email: "ayush@mail.com",
      mobile: 1234567890,
      gender: "Male",
      city: "Ahmedabad",
    },
    {
      id: 3,
      name: "Akash",
      address: "65, Bapunagar",
      email: "akash@mail.com",
      mobile: 1234567890,
      gender: "Male",
      city: "Ahmedabad",
    },
    {
      id: 4,
      name: "Amit",
      address: "12, Khodiyarnagar",
      email: "amit@mail.com",
      mobile: 1234567890,
      gender: "Male",
      city: "Ahmedabad",
    },
    {
      id: 5,
      name: "Vishal",
      address: "45, Shyamshikhar",
      email: "vishal@mail.com",
      mobile: 1234567890,
      gender: "Male",
      city: "Ahmedabad",
    },
  ];

  const handleDelete = (name) => {
    setIsDeleteModal(true);
    setDeleteUserName(name);
  };

  return (
    <div className="data_table">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>
                <b>Id</b>
              </TableCell>
              <TableCell align="left">
                <b>Name</b>
              </TableCell>
              <TableCell align="left">
                <b>Address</b>
              </TableCell>
              <TableCell align="left">
                <b>Email</b>
              </TableCell>
              <TableCell align="left">
                <b>Mobile</b>
              </TableCell>
              <TableCell align="left">
                <b>Gender</b>
              </TableCell>
              <TableCell align="left">
                <b>City</b>
              </TableCell>
              <TableCell align="center">
                <b>Action</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {TableData.map((data) => (
              <TableRow key={data.id} sx={{ td: { padding: "1rem" } }}>
                <TableCell component="th" scope="row">
                  {data.id}
                </TableCell>
                <TableCell align="left">{data.name}</TableCell>
                <TableCell align="left">{data.address}</TableCell>
                <TableCell align="left">{data.email}</TableCell>
                <TableCell align="left">{data.mobile}</TableCell>
                <TableCell align="left">{data.gender}</TableCell>
                <TableCell align="left">{data.city}</TableCell>
                <TableCell align="center">
                  <BorderColorRoundedIcon className="edit_icon" />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <DeleteRoundedIcon
                    className="delete_icon"
                    onClick={() => {
                      handleDelete(data.name);
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default DataTable;
