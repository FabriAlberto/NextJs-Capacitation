import { useMemo } from "react";
import { Paper, List } from "@mui/material";
import EntryCard from "./EntryCard";
import { EntryStatus } from "@/types/entry";
import { useEntriesContext } from "@/context/entries";
import { useUiContext } from "@/context/ui";
import styles from "./EntryList.module.css";

type Props = {
  status: EntryStatus;
};
const EntryList = ({ status }: Props) => {
  const { entries, changedEntryStatus, } = useEntriesContext();
  const { isDragging,handleDragging } = useUiContext();

  const entriesByStatus = useMemo(
    () => entries.filter((entry) => entry.status === status),
    [entries]
  );

  const allowDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };
  const onDropEntry = (event: React.DragEvent<HTMLDivElement>) => {
    const id = event.dataTransfer.getData("text");
    changedEntryStatus(id, status);
    handleDragging(false);
  };

  return (
    <div
      onDrop={onDropEntry}
      onDragOver={allowDrop}
      className={isDragging ? styles.dragging : ""}
    >
      <Paper
        sx={{
          height: "calc(100vh - 250px)",
          /*  overflow: "scroll", */
          backgroundColor: "transparent",
          padding: "3px 5px ",
        }}
      >
        <List sx={{ opacity: isDragging ? 0.3 : 1, transition: "all .3s" }}>
          {entriesByStatus.map((entry) => (
            <EntryCard key={entry._id} entry={entry} />
          ))}
        </List>
      </Paper>
    </div>
  );
};

export default EntryList;
