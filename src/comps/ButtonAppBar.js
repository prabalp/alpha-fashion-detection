import React from "react";
import { AppBar, Box, Toolbar, Typography, Button } from "@material-ui/core";
import UploadForm from "./UploadForm";

function ButtonAppBar({ value, setValue }) {
  const handleClick = () => {
    console.log("clicked", value);
    if (value) {
      setValue(false);
    } else {
      setValue(true);
    }
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton> */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Fashionhub
          </Typography>
          <Button color="inherit" onClick={handleClick}>
            Tags
          </Button>
          <UploadForm />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default ButtonAppBar;
