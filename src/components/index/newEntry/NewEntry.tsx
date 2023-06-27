import { Button, Box } from "@mui/material";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import EntryForm from "./EntryForm";
import { useUiContext } from "@/context/ui";
const NewEntry = () => {
  const { setIsAddingEntry, isAddingEntry } = useUiContext();

  const openAddEntry = () => {
    setIsAddingEntry(true);
  };
  const closeAddEntry = () => {
    setIsAddingEntry(false);
  };
  
  return (
    <Box marginBottom={"20px"}>
      {isAddingEntry ? (
        <EntryForm cancel={closeAddEntry} />
      ) : (
        <Button
          startIcon={<AddOutlinedIcon />}
          variant="outlined"
          fullWidth
          sx={{ marginTop: "20px" }}
          onClick={openAddEntry}
        >
          Agregar tarea
        </Button>
      )}
    </Box>
  );
};

export default NewEntry;
