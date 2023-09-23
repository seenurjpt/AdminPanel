import React from "react";
import "./UserForm.css";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
// import { makeStyles } from "@material-ui/core/styles";
// import makeStyles from "@mui/material";

const UserForm = ({ setIsFormModal }) => {
  // const useStyles = makeStyles({
  //     focused: {
  //       '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
  //         borderColor: '#8d5295',
  //       },
  //     },
  //   });
  //   const classes = useStyles();
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
        <h2>Registration</h2></div>
        <form className="form_inputs">
          {/* Name Input */}
          <TextField id="outlined-basic" label="Name" variant="outlined" />
          {/* Address Input  */}
          <TextField
            id="outlined-multiline-static"
            label="Address"
            multiline
            rows={3}
          />
          {/* Email Input  */}
          <TextField id="outlined-basic" label="Email" variant="outlined" />

          {/* Mobile Input  */}
          <TextField id="outlined-basic" label="Mobile" variant="outlined" />

          {/* Gender Input  */}
          <FormControl>
            <FormLabel
              id="demo-row-radio-buttons-group-label"
            >
              Gender
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              sx={{ marginLeft: "1rem" }}
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
            >
              <MenuItem >-Select City-</MenuItem>
              <MenuItem value={20}>Ahmedabad</MenuItem>
              <MenuItem value={30}>Surat</MenuItem>
              <MenuItem value={30}>Baroda</MenuItem>
              <MenuItem value={30}>Rajkot</MenuItem>
              <MenuItem value={30}>Gandhinagar</MenuItem>
              <MenuItem value={30}>Jamnagar</MenuItem>
              <MenuItem value={30}>Bhavnagar</MenuItem>
            </Select>
          </FormControl>

          {/* T & C Checkbox  */}
          <div className="input_check">
            <input type="checkbox" name="" id="terms_conditions"  style={{display:'none'}}/>
            <label for='terms_conditions'></label>
            <p>I agree to the company terms and policy</p>
          </div>

          {/* Buttons  */}
          <div className="buttons">
          <button type="submit" className="signup_btn">SIGN UP</button>
          <button type="reset" className="reset_btn">RESET</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserForm;
