import { Box, Stack, Typography } from "@mui/material";
import JSONEditor from "../JSONEditor/JSONEditor";
import JsonSchemaForm from "../JsonSchemaForm/JsonSchemaForm";
import { useState } from "react";

const JSONSchemaPlayground = () => {
  const [schema, setSchema] = useState(null);
  return (
    <>
      <Box>
        <Typography variant="h4">JSON Schema Playground</Typography>
        <Stack spacing={2} direction="row" justifyContent="center">
          <JSONEditor onSchemaChange={setSchema} />
          {schema ? (
            <JsonSchemaForm schema={schema} />
          ) : (
            "Please insert schema in the form"
          )}
        </Stack>
      </Box>
    </>
  );
};

export default JSONSchemaPlayground;
