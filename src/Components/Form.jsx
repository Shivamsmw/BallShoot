import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { AuthContext } from "../Context/Context";
export default function Form() {
  let { data, handleData } = React.useContext(AuthContext);
  let [value, setValue] = React.useState("");
  const handleChange = e => {
    e.preventDefault();
    setValue(e.target.value);
  };
  const handleClick = e => {
    e.preventDefault();
    if (data.length === 0) {
      alert("no balls left");
    } else if (value > data.length) {
      alert("please enter a valid ball number");
    } else if (value == 0) {
      alert("value number cannot be zero");
    } else {
      handleData(value - 1);

      setValue("");
    }
  };
  return (
    <div>
      <br />
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "18ch", height: "5ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          value={value}
          label="Enter Ball Number"
          variant="outlined"
          onChange={handleChange}
        />
        <br />
        <Button
          variant="outlined"
          style={{ margin: "5px" }}
          onClick={handleClick}
        >
          Shoot
        </Button>
      </Box>
    </div>
  );
}
