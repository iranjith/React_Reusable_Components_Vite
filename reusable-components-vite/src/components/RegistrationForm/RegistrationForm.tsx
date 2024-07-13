import React, { useState } from "react";
import TextInput from "../TextInput/TextInput";
import PasswordInput from "../PasswordInput/PasswordInput";

interface IRegistrationFormProps {
  confirmationMessage?: string;
  onSubmit: (user: User) => void;
  minPasswordLength?: number;
}

type User = {
  email: string;
  password: string;
};

const RegistrationForm = ({
  confirmationMessage = "Thanks for registering",
  onSubmit,
  minPasswordLength = 8,
}: IRegistrationFormProps) => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState<User>({ email: "", password: "" });
  const [submitted, setSubmitted] = useState(false);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const passwordQuality = (password: string) => {
    if (!password) return 0;
    if (password.length >= minPasswordLength) return 100;
    const percentOfMinLength = Math.floor(
      (password.length / minPasswordLength) * 100
    );
    return percentOfMinLength;
  };

  const validate = ({ email, password }: User) => {
    const errors: { email?: string; password?: string } = {};

    if (!email) errors.email = "Email required.";
    if (password.length < minPasswordLength)
      errors.password = `Password must be at least ${minPasswordLength} characters.`;

    setErrors(errors);
    const formIsValid = Object.getOwnPropertyNames(errors).length === 0;
    return formIsValid;
  };

  const handleSubmit = () => {
    const formIsValid = validate(user);
    if (formIsValid) {
      onSubmit(user);
      setSubmitted(true);
    }
  };

  return (
    <>
      {submitted ? (
        <h2>{confirmationMessage}</h2>
      ) : (
        <div>
          <TextInput
            htmlId="registration-form-email"
            name="email"
            onChange={onChange}
            label="Email"
            value={user.email}
            error={errors.email}
            required
            placeholder="E-mail"
            type="text"
          />

          <PasswordInput
            htmlId="registration-form-password"
            name="password"
            value={user.password}
            onChange={onChange}
            quality={passwordQuality(user.password)}
            showVisibilityToggle
            maxLength={50}
            error={errors.password}
            placeholder="password"
          />

          <input type="submit" value="Register" onClick={handleSubmit} />
        </div>
      )}
    </>
  );
};

export default RegistrationForm;
