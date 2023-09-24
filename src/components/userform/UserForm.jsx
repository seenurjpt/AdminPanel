import React, { useState } from "react";
import "./UserForm.css";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";

const UserForm = ({ setIsFormModal, dataArray, setDataArray }) => {
  let [inputData, setInputData] = useState({
    name: "",
    address: "",
    email: "",
    mobile: "",
    gender: "",
    city: "",
  });

  const handleInput = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  let { name, address, email, mobile, gender, city } = inputData;
  const handleSubmit = (e) => {
    setDataArray([
      ...dataArray,
      { name, address, email, mobile, gender, city },
    ]);
    setInputData({
      name: "",
      address: "",
      email: "",
      mobile: "",
      gender: "",
      city: "",
    });
    e.preventDefault();
    setIsFormModal(false);
  };
  const handleReset = () => {
    setInputData({
      name: "",
      address: "",
      email: "",
      mobile: "",
      gender: "",
      city: "",
    });
  };
  return (
    <div
      className="user_form_container"
      onClick={() => {
        setIsFormModal(false);
      }}
    >
      <div className="user_form" onClick={(e) => e.stopPropagation()}>
        <div className="close_icon_container">
          <AddCircleIcon
            className="close_icon"
            onClick={() => {
              setIsFormModal(false);
            }}
          />
        </div>
        <div className="form_heading">
          <h2>Registration</h2>
        </div>
        <form className="form_inputs" onSubmit={handleSubmit}>
          {/* Name Input */}
          <TextField
            id="outlined-basic"
            label="Name"
            name="name"
            value={inputData.name || ""}
            variant="outlined"
            onChange={(e) => {
              handleInput(e);
            }}
          />
          {/* Address Input  */}
          <TextField
            id="outlined-multiline-static"
            label="Address"
            name="address"
            value={inputData.address || ""}
            multiline
            rows={3}
            onChange={(e) => {
              handleInput(e);
            }}
          />
          {/* Email Input  */}
          <TextField
            id="outlined-basic"
            label="Email"
            name="email"
            value={inputData.email || ""}
            variant="outlined"
            onChange={(e) => {
              handleInput(e);
            }}
          />

          {/* Mobile Input  */}
          <TextField
            id="outlined-basic"
            label="Mobile"
            name="mobile"
            value={inputData.mobile || ""}
            variant="outlined"
            onChange={(e) => {
              handleInput(e);
            }}
          />

          {/* Gender Input  */}
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">
              Gender
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="gender"
              value={inputData.gender || ""}
              sx={{ marginLeft: "1rem" }}
              onChange={(e) => {
                handleInput(e);
              }}
            >
              <FormControlLabel
                value="male"
                control={<Radio />}
                label="Male"
                sx={{ color: "#8d5295" }}
              />
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
                sx={{ color: "#8d5295" }}
              />
            </RadioGroup>
          </FormControl>

          {/* City Input  */}
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">City</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="City"
              name="city"
              value={inputData.city || ""}
              onChange={(e) => {
                handleInput(e);
              }}
            >
              <MenuItem>-Select City-</MenuItem>
              <MenuItem value={"Ahmedabad"}>Ahmedabad</MenuItem>
              <MenuItem value={"Surat"}>Surat</MenuItem>
              <MenuItem value={"Baroda"}>Baroda</MenuItem>
              <MenuItem value={"Rajkot"}>Rajkot</MenuItem>
              <MenuItem value={"Gandhinagar"}>Gandhinagar</MenuItem>
              <MenuItem value={"Jamnagar"}>Jamnagar</MenuItem>
              <MenuItem value={"Bhavnagar"}>Bhavnagar</MenuItem>
            </Select>
          </FormControl>

          {/* T & C Checkbox  */}
          <div className="input_check">
            <input
              type="checkbox"
              name=""
              id="terms_conditions"
              style={{ display: "none" }}
            />
            <label htmlFor="terms_conditions"></label>
            <p>I agree to the company terms and policy</p>
          </div>

          {/* Buttons  */}
          <div className="buttons">
            <button type="submit" className="signup_btn">
              SIGN UP
            </button>
            <button
              type="reset"
              className="reset_btn"
              onClick={() => {
                handleReset();
              }}
            >
              RESET
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserForm;
