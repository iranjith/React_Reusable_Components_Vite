import { Box, TextField } from "@mui/material";
import React, { useState } from "react";

interface JSONEditorProps {
  onSchemaChange: (newJsonData: any) => void;
}

const JSONEditor = ({ onSchemaChange }: JSONEditorProps) => {
  const [textValue, setTextValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextValue(event.target.value);
    try {
      const parsedSchema = JSON.parse(event.target.value);
      onSchemaChange(parsedSchema);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "50ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        value={textValue}
        onChange={handleChange}
        multiline
        rows={20}
        fullWidth
        variant="outlined"
        label="JSON Data"
      />
    </Box>
  );
};

export default JSONEditor;

// useEffect(() => {
//   setTextValue(JSON.stringify(jsonData, null, 2));
// }, [jsonData]);
