import React from "react";
import {
  CheckboxContainer,
  CheckboxInput,
  CheckboxWrapper,
  ErrorMessage,
  Label,
} from "./FormComponents.styled";

const Checkbox = ({ field, value, onChange, error }) => {
  return (
    <CheckboxWrapper>
      <CheckboxContainer>
        <CheckboxInput
          id={field.name}
          type="checkbox"
          name={field.name}
          checked={value || false}
          onChange={(e) => onChange(field.name, e.target.checked)}
          required={field.required}
          {...field.props}
        />
        <Label htmlFor={field.name} required={field.required}>
          {field.label}
        </Label>
      </CheckboxContainer>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </CheckboxWrapper>
  );
};

export default Checkbox;
