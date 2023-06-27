import React, { useState } from "react";
import { TextField, Box, Button } from "@mui/material";
import SaveAltOutlinedIcon from "@mui/icons-material/SaveAltOutlined";
import { useEntriesContext } from "@/context/entries";
type Props = {
  cancel: () => void;
};
const EntryForm = ({ cancel }: Props) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [touched, setTouched] = useState<boolean>(false);
  const { addNewEntry } = useEntriesContext();
  
  const onTextFieldChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const onSave = () => {
    if (inputValue.length <= 0) return;

    addNewEntry(inputValue);
    setInputValue("");
    setTouched(false);
    cancel();
  };


  return (
    <>
      <TextField
        fullWidth
        size="medium"
        sx={{ marginBottom: "20px", marginTop: "20px" }}
        placeholder="New Entry"
        label="New entry"
        multiline
        autoFocus
        value={inputValue}
        onChange={onTextFieldChanges}
        error={inputValue.length <= 0 && touched}
        helperText={
          inputValue.length <= 0 && touched && "Por favor ingrese un valor "
        }
        onBlur={() => setTouched(true)}
      />
      <Box display="flex" justifyContent={"space-between"}>
        <Button variant="text" onClick={cancel}>
          Cancelar
        </Button>
        <Button
          color="primary"
          variant="contained"
          endIcon={<SaveAltOutlinedIcon />}
          onClick={onSave}
        >
          Guardar
        </Button>
      </Box>
    </>
  );
};

export default EntryForm;
