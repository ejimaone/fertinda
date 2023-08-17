import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { ClassNames } from "@emotion/react";

export default function DaysDropdown() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          style={{ height: "40px", width: "10rem" }}
        >
          <MenuItem value="" disabled selected>
            <em>Select day</em>
          </MenuItem>

          <MenuItem value={10}>Monday</MenuItem>
          <MenuItem value={20}>Tuesday</MenuItem>
          <MenuItem value={30}>Wednesday</MenuItem>
          <MenuItem value={30}>Thursday</MenuItem>
          <MenuItem value={30}>Friday</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
