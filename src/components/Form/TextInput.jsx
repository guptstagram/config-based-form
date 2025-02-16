import React from "react";
import {
  ErrorMessage,
  Input,
  InputWrapper,
  Label,
} from "./FormComponents.styled";

const TextInput = ({ field, value, onChange, error }) => {
  return (
    <InputWrapper>
      <Label htmlFor={field.name} required={field.required}>
        {field.label}
      </Label>
      <Input
        id={field.name}
        type={field.inputType || "text"}
        name={field.name}
        value={value || ""}
        onChange={(e) => onChange(field.name, e.target.value)}
        placeholder={field.placeholder || ""}
        required={field.required}
        hasError={!!error}
        {...field.props}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </InputWrapper>
  );
};

export default TextInput;
