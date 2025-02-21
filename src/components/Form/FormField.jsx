import React from "react";
import componentMap from "./FormComponents";
import useFormStore from "../../store/form.zustand";

const FormField = ({ parents='',field }) => {
  const { formData, updateField, errors, isFieldVisible,getFieldValue } = useFormStore();

  // parentsString
  // parentsString break by dot
  const fieldTrace=`${parents?parents+'.':''}${field.name}`

  if (field.type === "FIELDS") {
    return (
      <div>
        <p>{'nested-example-->'}{field.label}</p>
        <div>
          {field.fields.map((field) => (
            !field.hide && (
              <FormField
                key={field.name}
                parents={fieldTrace}
                field={field}
              />
            )
          ))}
        </div>
      </div>
    );
  }

  if (!isFieldVisible(field)) {
    return null;
  }

  const Component = componentMap[field.type];

  if (!Component) {
    console.warn(`Unknown field type: ${field.type}`);
    return null;
  }

  console.log("A____",getFieldValue(field.name))

  return (
    <Component
    field={{
      ...field,
      name: fieldTrace,
    }}
      value={getFieldValue(fieldTrace)}
      onChange={updateField}
      error={errors[fieldTrace]}
    />
  );
};

export default FormField;
