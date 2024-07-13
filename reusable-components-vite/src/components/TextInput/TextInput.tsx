import { ReactNode } from "react";
import Label from "../Label/Label";

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

const TextInput = ({
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
    <div style={{ marginBottom: 16 }}>
      <Label htmlFor={htmlId} label={label} required={required} />
      <input
        id={htmlId}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={{ border: "solid 1px red" }}
        {...props}
      />
      {children}
      {error && (
        <div className="error" style={{ color: "red" }}>
          {error}
        </div>
      )}
    </div>
  );
};

export default TextInput;
