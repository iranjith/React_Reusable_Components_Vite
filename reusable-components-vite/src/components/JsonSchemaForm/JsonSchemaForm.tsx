import React, { useState } from "react";
import Form from "@rjsf/core";
import { RJSFSchema } from "@rjsf/utils";
import validator from "@rjsf/validator-ajv8";

// const schema: RJSFSchema = {
//   title: "Test form",
//   type: "object",
//   properties: {
//     name: {
//       type: "string",
//     },
//     age: {
//       type: "number",
//     },
//   },
// };

// interface IFormData {
//   name: string;
//   age: number;
// }

interface ISchema {
  schema: RJSFSchema;
}

const JsonSchemaForm = ({ schema }: ISchema) => {
  // const [formData, setFormData] = useState<IFormData>({
  //   name: "First Name",
  //   age: 30,
  // });
  // const handleSubmit = ({ formData }) => {
  //   console.log("Form data submitted:", formData);
  // };
  return (
    <>
      <Form
        schema={schema}
        // formData={formData}
        // onChange={(e) => setFormData(e.formData)}
        // onSubmit={handleSubmit}
        validator={validator}
      />
    </>
  );
};

export default JsonSchemaForm;
