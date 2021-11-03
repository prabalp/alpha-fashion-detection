import Radio from "@material-ui/core/Radio";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import { FormHelperText } from "@material-ui/core";
import FormLabel from "@material-ui/core/FormLabel";
import React, { useState, useEffect } from "react";

function Checkboxes({ setSpecificImg, setValueO }) {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState("Choose wisely");

  const handleRadioChange = (event) => {
    console.log("hahahaha", event.target.value);
    setValue([...value, event.target.value]);
    setHelperText(" ");
    setError(false);
    console.log("yes");
  };

  const allTags = [
    "short sleeve top",
    "long sleeve top",
    "short sleeve outwear",
    "long sleeve outwear",
    "vest",
    "sling",
    "shorts",
    "trousers",
    "skirt",
    "short sleeve dress",
    "long sleeve dress",
    "vest dress",
    "sling dress",
  ];
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
        console.log(val);
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

  const handleSubmit = (event) => {
    event.preventDefault();
    stringUpdate(value);
    setValueO(false);

    // if (value === "best") {
    //   setHelperText("You got it!");
    //   setError(false);
    // } else if (value === "worst") {
    //   setHelperText("Sorry, wrong answer!");
    //   setError(true);
    // } else {
    //   setHelperText("Please select an option.");
    //   setError(true);
    // }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl
        sx={{ m: 3 }}
        component="fieldset"
        error={error}
        variant="standard"
      >
        <FormLabel component="legend">Tags</FormLabel>
        {/* <RadioGroup
          aria-label="quiz"
          name="quiz"
          value={value}
          onChange={handleRadioChange}
        > */}
        <div onChange={handleRadioChange}>
          {allTags.map((tag, key) => {
            return (
              <FormControlLabel
                key={key}
                value={key}
                control={<Radio />}
                label={tag}
              />
            );
          })}
        </div>
        {/* </RadioGroup> */}
        <FormHelperText>{helperText}</FormHelperText>
        <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
          Search
        </Button>
      </FormControl>
    </form>
  );
}

export default Checkboxes;
