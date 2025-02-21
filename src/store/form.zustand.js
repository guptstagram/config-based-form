import { create } from "zustand";

const useFormStore = create((set, get) => ({
  formData: {},
  errors: {},

  getFieldValue: (fieldTrace) => {
    const formData = get().formData;
    if (!fieldTrace) return '';
    if (!fieldTrace.includes('.')) {
      return formData[fieldTrace] || '';
    }
    const pathArray = fieldTrace.split('.');
    let current = formData;
    for (const key of pathArray) {
      if (!current || typeof current !== 'object') return '';
      current = current[key];
    }
    return current || '';
  },

  updateField: (fieldTrace, value) => {
    // console.log("A____",fieldTrace,value)
    set(state => {
      const newFormData = { ...state.formData };
      const pathArray = fieldTrace.split('.');
      let current = newFormData;
      for (let i = 0; i < pathArray.length - 1; i++) {
        current[pathArray[i]] = current[pathArray[i]] || {};
        current = current[pathArray[i]];
      }
      current[pathArray[pathArray.length - 1]] = value;
      return { formData: newFormData };
    });
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
