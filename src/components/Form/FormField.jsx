import React from "react";
import componentMap from "./FormComponents";
import useFormStore from "../../store/form.zustand";

const FormField = ({ field }) => {
  const { formData, updateField, errors, isFieldVisible } = useFormStore();

  if (!isFieldVisible(field)) {
    return null;
  }

  const Component = componentMap[field.type];

  if (!Component) {
    console.warn(`Unknown field type: ${field.type}`);
    return null;
  }

  return (
    <Component
      field={field}
      value={formData[field.name]}
      onChange={updateField}
      error={errors[field.name]}
    />
  );
};

export default FormField;
