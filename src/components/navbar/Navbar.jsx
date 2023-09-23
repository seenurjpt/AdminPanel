import React from "react";
import "./Navbar.css";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import PersonAddRoundedIcon from "@mui/icons-material/PersonAddRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { TextField } from "@mui/material";

const Navbar = ({setIsFormModal}) => {
  return (
    <div className="navbar">
      <div className="user_details">
        <PeopleAltRoundedIcon className="users_icon" />
        <h2>User Details</h2>
      </div>
      <div></div>
      <div className="search">
        <div className="search_bar">
          <SearchRoundedIcon className="search_icon" />
          <TextField
            id="outlined-basic"
            className="search_input"
            placeholder="Search Here..."
            variant="outlined"
          />
        </div>
        <PersonAddRoundedIcon className="adduser_icon" onClick={()=>{setIsFormModal(true)}}/>
      </div>
    </div>
  );
};

export default Navbar;
