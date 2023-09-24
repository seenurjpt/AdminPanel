import React, { useState } from "react";
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
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import Alert from "@mui/material/Alert";
import DeleteModal from "./DeleteModal";
import Navbar from "../navbar/Navbar";

const DataTable = () => {
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const [deleteUserName, setDeleteUserName] = useState("");
  const [deleteUserIndex, setDeleteUserIndex] = useState(0);
  let [dataArray, setDataArray] = useState([]);

  const handleDelete = (name, index) => {
    setIsDeleteModal(true);
    setDeleteUserName(name);
    setDeleteUserIndex(index)
  };

  return (
    <>
      <Navbar setDataArray={setDataArray} dataArray={dataArray} />
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
              {dataArray.map((data, index) => (
                <TableRow key={index} sx={{ td: { padding: "1rem" } }}>
                  <TableCell component="th" scope="row">
                    {index + 1}
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
                        handleDelete(data.name, index);
                      }}
                    />
                    {!isDeleteModal ? (
                      <></>
                    ) : (
                      <DeleteModal
                        setIsDeleteModal={setIsDeleteModal}
                        username={deleteUserName}
                        index={deleteUserIndex}
                        dataArray={dataArray}
                      />
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {dataArray.length > 0 ? (
          <></>
        ) : (
          <div className="no_data">
            <h1>No Data to Display :(</h1>
            <p>Add User to Display data</p>
          </div>
        )}
        {/* <div className="success_alert">
        <Alert variant="filled" severity="success" className="success_alert_box">
          User Updated Successfully...
        </Alert>
          <ClearRoundedIcon className="clear_icon"/>
      </div> */}
      </div>
    </>
  );
};

export default DataTable;
