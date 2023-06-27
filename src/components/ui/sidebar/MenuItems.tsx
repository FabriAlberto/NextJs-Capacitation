import React from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import { MenuItemType } from "@/types/menu";
type Props = {
  items: MenuItemType[];
};
const MenuItems = ({ items }: Props) => {
  return (
    <List>
      {items.map(({ title, icon }) => (
        <>
          <ListItem button key={title}>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={title}></ListItemText>
          </ListItem>
          <Divider />
        </>
      ))}
    </List>
  );
};

export default MenuItems;
