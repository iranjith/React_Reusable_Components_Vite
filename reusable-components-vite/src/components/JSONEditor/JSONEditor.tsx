import { Box, TextField } from "@mui/material";
import React, { useState, useEffect } from "react";

interface JSONEditorProps {
  jsonData: any;
  onChange: (newJsonData: any) => void;
}

const JSONEditor = ({ jsonData, onChange }: JSONEditorProps) => {
  const [textValue, setTextValue] = useState(JSON.stringify(jsonData, null, 2));

  useEffect(() => {
    setTextValue(JSON.stringify(jsonData, null, 2));
  }, [jsonData]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextValue(event.target.value);
    try {
      const parsedJson = JSON.parse(event.target.value);
      onChange(parsedJson);
    } catch (error) {
      // Handle JSON parse error if needed
    }
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "70ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        value={textValue}
        onChange={handleChange}
        multiline
        rows={50}
        fullWidth
        variant="outlined"
        label="JSON Data"
      />
    </Box>
  );
};

export default JSONEditor;
