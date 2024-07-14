import React from "react";
import Form from "@rjsf/core";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Container from "@mui/material/Container";
import { JSONSchema7 } from "json-schema";
import validator from "@rjsf/validator-ajv8";

const schema: JSONSchema7 = {
  type: "object",
  title: "Order",
  required: ["customer", "items"],
  properties: {
    customer: {
      type: "object",
      title: "Customer",
      required: ["name", "email"],
      properties: {
        name: {
          type: "string",
          title: "Name",
        },
        email: {
          type: "string",
          title: "Email",
          format: "email",
        },
      },
    },
    items: {
      type: "array",
      title: "Items",
      items: {
        type: "object",
        title: "Item",
        required: ["name", "quantity", "price"],
        properties: {
          name: {
            type: "string",
            title: "Name",
          },
          quantity: {
            type: "integer",
            title: "Quantity",
            minimum: 1,
          },
          price: {
            type: "number",
            title: "Price",
            minimum: 0,
          },
        },
      },
    },
    shippingAddress: {
      type: "object",
      title: "Shipping Address",
      properties: {
        street: {
          type: "string",
          title: "Street Address",
        },
        city: {
          type: "string",
          title: "City",
        },
        zipCode: {
          type: "string",
          title: "Zip Code",
        },
      },
    },
  },
};

const theme = createTheme();

const DynamicForm: React.FC = () => {
  const handleSubmit = (formData: any) => {
    console.log("Form submitted:", formData);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Form schema={schema} onSubmit={handleSubmit} validator={validator} />
      </Container>
    </ThemeProvider>
  );
};

export default DynamicForm;
