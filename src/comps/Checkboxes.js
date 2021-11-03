import Radio from "@material-ui/core/Radio";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import React, { useState, useEffect } from "react";

function Checkboxes({ setSpecificImg }) {
  // let str = "";

  function stringUpdate(val) {
    let str = "";
    console.log(val); //array of checked values
    console.log(str);
    // if (val === 13) {
    //   str = "111111111111111";
    // }
    for (let i = 0; i < 13; i++) {
      console.log(i);
      var presence = 0;
      if (val) {
        for (var j = 0; j < val.length; j++) {
          // var tagName = val[j];
          console.log("bhalues", val[j]);
          if (val[j] == i) {
            console.log("reach");
            presence = 1;
          }
        }
      }
      if (presence === 1) {
        console.log("inside if");
        str += "1";
      } else {
        str += "0";
      }
    }
    console.log(str);
    // decode(str);
    setSpecificImg(str);
    return str;
  }

  const [value, setValue] = React.useState([]);
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState("Choose wisely");

  const handleRadioChange = (event) => {
    console.log("hahahaha", event.target.value);
    setValue([...value, event.target.value]);
    setHelperText(" ");
    setError(false);
    console.log("yes");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    stringUpdate(value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* <FormControl
          sx={{ m: 5 }}
          component="fieldset"
          error={error}
          variant="standard"
        > */}
        <FormLabel component="legend">Tags</FormLabel>
        <div
          row
          // aria-label="class"
          // name="row-radio-buttons-group"
          onChange={handleRadioChange}
          // style={{ width: "100%", display: "flex", flexDirection: "row" }}
        >
          <FormControlLabel
            value="0"
            control={<Radio />}
            label="short sleeve top"
            // style={{ width: "100%" }}
          />
          <FormControlLabel
            value="1"
            control={<Radio />}
            label="long sleeve top"
          />
          <FormControlLabel
            value="2"
            control={<Radio />}
            label="short sleeve outwear"
          />
          <FormControlLabel
            value="3"
            control={<Radio />}
            label="long sleeve outwear"
          />
          <FormControlLabel value="4" control={<Radio />} label="vest" />
          <FormControlLabel value="5" control={<Radio />} label="sling" />
          <FormControlLabel value="6" control={<Radio />} label="shorts" />
          <FormControlLabel value="7" control={<Radio />} label="trousers" />
          <FormControlLabel value="8" control={<Radio />} label="skirt" />
          <FormControlLabel
            value="9"
            control={<Radio />}
            label="short sleeve dress"
          />
          <FormControlLabel
            value="10"
            control={<Radio />}
            label="long sleeve dress"
          />
          <FormControlLabel value="11" control={<Radio />} label="vest dress" />
          <FormControlLabel
            value="12"
            control={<Radio />}
            label="sling dress"
          />
          <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
            Search
          </Button>
        </div>
        {/* </FormControl> */}
      </form>
    </div>
  );
}

export default Checkboxes;
