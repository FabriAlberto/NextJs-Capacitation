import React from "react";
import { Drawer, Box, Typography, List } from "@mui/material";
import MenuItems from "./MenuItems";
import { menuItems } from "./menuItemsRoute";
import { useUiContext } from "@/context/ui";


const Sidebar = () => {
  const {isOpenMenu,closeMenu} =useUiContext()
  return (
    <Drawer anchor="left" open={isOpenMenu} onClose={closeMenu}>
      <Box width={'200px'}>

      <Box padding={"5px 10px"}>
        <Typography variant="h4">Men&uacute;</Typography>
      </Box>
      <MenuItems items={menuItems} />
      </Box>
    </Drawer>
  );
};

export default Sidebar;
