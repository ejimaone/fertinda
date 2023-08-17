import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { ClassNames } from "@emotion/react";

export default function Dropdown() {
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
            <em>Select fertilizer</em>
          </MenuItem>

          <MenuItem value={10}>Nitrogen</MenuItem>
          <MenuItem value={20}>Sulphur</MenuItem>
          <MenuItem value={30}>Potassium</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
