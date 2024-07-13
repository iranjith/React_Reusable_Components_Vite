import React, { MouseEventHandler, useState } from "react";
import EyeIcon from "../EyeIcon/EyeIcon";
import ProgressBar from "../ProgressBar/ProgressBar";
import TextInput from "../TextInput/TextInput";

interface PasswordProps {
  htmlId: string;
  name: string;
  value: any;
  label?: string;
  onChange: () => void;
  maxLength?: number;
  minLength?: number;
  placeholder: string;
  showVisibilityToggle?: boolean;
  quality: number;
  error: string;
}

const PasswordInput = ({
  htmlId,
  value,
  label = "Password",
  error,
  onChange,
  placeholder,
  maxLength = 50,
  minLength = 8,
  showVisibilityToggle = false,
  quality,
  ...props
}: PasswordProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = (event: React.MouseEvent<HTMLAnchorElement>) => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
    if (event) event.preventDefault();
  };

  return (
    <TextInput
      htmlId={htmlId}
      label={label}
      placeholder={placeholder}
      type={showPassword ? "text" : "password"}
      onChange={onChange}
      value={value}
      maxLength={maxLength}
      minLength={minLength}
      error={error}
      required
      {...props}
    >
      {showVisibilityToggle && (
        <a href="#" onClick={toggleShowPassword} style={{ marginLeft: 5 }}>
          <EyeIcon />
        </a>
      )}
      {/* {value.length > 0 && quality && (
        <ProgressBar percent={quality} width={130} />
      )} */}
    </TextInput>
  );
};

export default PasswordInput;
