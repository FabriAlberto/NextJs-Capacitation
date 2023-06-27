import React from "react";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { useUiContext } from "@/context/ui";
const Navbar = () => {
  const { openMenu } = useUiContext();
  return (
    <AppBar position="sticky" elevation={0}>
      <Toolbar>
        <IconButton edge="start" size="large" onClick={openMenu}>
          <MenuOutlinedIcon color="primary" />
        </IconButton>
        <Typography variant="h6" color={"primary"}>
          Open Jira
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
