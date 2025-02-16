import React from "react";
import {
  ErrorMessage,
  Label,
  Select,
  SelectWrapper,
} from "./FormComponents.styled";

const SelectInput = ({ field, value, onChange, error }) => {
  return (
    <SelectWrapper>
      <Label htmlFor={field.name} required={field.required}>
        {field.label}
      </Label>
      <Select
        id={field.name}
        name={field.name}
        value={value || ""}
        onChange={(e) => onChange(field.name, e.target.value)}
        required={field.required}
        hasError={!!error}
        {...field.props}
      >
        <option value="">Select an option</option>
        {field.options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </SelectWrapper>
  );
};

export default SelectInput;
