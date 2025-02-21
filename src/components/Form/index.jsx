import React, { useEffect } from "react";
import FormField from "./FormField";
import { Form, FormTitle, SubmitButton } from "./FormComponents.styled";
import useFormStore from "../../store/form.zustand";
import { validateFields } from "../../utils/validateFields.utils";

const DynamicForm = ({ formConfig, onSubmit }) => {
  const { formData, resetForm, setErrors, errors } = useFormStore();

  useEffect(() => {
    // Reset form when config changes
    resetForm();
  }, [formConfig, resetForm]);

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    formConfig.fields.forEach((field) => {
      const error = validateFields(field, formData[field.name]);
      if (error) {
        newErrors[field.name] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      onSubmit(formData);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      {formConfig.title && <FormTitle>{formConfig.title}</FormTitle>}

      {formConfig.fields.map((field) => (
        field.hide?null:<FormField key={field.name} field={field} />
      ))}

      <SubmitButton type="submit">
        {formConfig.submitText || "Submit"}
      </SubmitButton>
    </Form>
  );
};

export default DynamicForm;
