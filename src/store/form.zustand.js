import { create } from "zustand";

const useFormStore = create((set, get) => ({
  formData: {},
  errors: {},

  updateField: (fieldName, value) => {
    set((state) => ({
      formData: {
        ...state.formData,
        [fieldName]: value,
      },
    }));
  },

  setErrors: (errors) => {
    set({ errors });
  },

  resetForm: () => {
    set({ formData: {}, errors: {} });
  },

  isFieldVisible: (field) => {
    if (!field.conditional) return true;

    const condition = field.conditional;
    const formData = get().formData;

    // Check if the dependent field exists and matches the condition
    const dependentField = condition.field;
    const dependentValue = formData[dependentField];

    if (condition.operator === "equals") {
      return dependentValue === condition.value;
    } else if (condition.operator === "notEquals") {
      return dependentValue !== condition.value;
    } else if (condition.operator === "contains") {
      return (
        Array.isArray(dependentValue) &&
        dependentValue.includes(condition.value)
      );
    } else if (condition.operator === "notEmpty") {
      return (
        dependentValue &&
        (typeof dependentValue === "string"
          ? dependentValue.trim() !== ""
          : Array.isArray(dependentValue)
            ? dependentValue.length > 0
            : true)
      );
    }

    return true;
  },
}));

export default useFormStore;
