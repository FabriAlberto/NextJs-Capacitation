import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  CardActions,
} from "@mui/material";
import { Entry } from "@/types/entry";
import { useUiContext } from "@/context/ui";

type Props = {
  entry: Entry;
};
const EntryCard = ({ entry }: Props) => {
  const { description, createdAt } = entry;
  const { handleDragging } = useUiContext();

  const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData("text", entry._id);
    handleDragging(true);
  };
  const onDragEnd = () => {
    handleDragging(false);
  };
  return (
    <Card
      sx={{ marginBottom: 1 }}
      draggable
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    >
      <CardActionArea>
        <CardContent>
          <Typography sx={{ whiteSpace: "pre-line" }}>{description}</Typography>
        </CardContent>
        <CardActions
          sx={{ display: "flex", justifyContent: "end", padding: 2 }}
        >
          <Typography variant="body2">30 minutes ago</Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};

export default EntryCard;
