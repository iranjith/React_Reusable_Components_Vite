import { ReactNode } from "react";
import { Box, TextField } from "@mui/material";
import Label from "../Label/Label";
import "./TextInputBEM.css";

interface Props {
  htmlId: string;
  name: string;
  label: string;
  placeholder: string;
  type: "text" | "number" | "password";
  required: boolean;
  value: any;
  error: string;
  children?: ReactNode;
  maxLength?: number;
  minLength?: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInputBEM = ({
  htmlId,
  name,
  label,
  type = "text",
  required = false,
  onChange,
  placeholder,
  value,
  error,
  children,
  ...props
}: Props) => {
  return (
    <div className="textinput">
      <Label htmlFor={htmlId} label={label} required={required} />
      <input
        id={htmlId}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={error && "textinput__input--state-error"}
        {...props}
      />
      {children}
      {error && <div className="textinput__error">{error}</div>}
    </div>
  );
};

export default TextInputBEM;
