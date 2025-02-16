export const validateFields = (field, value) => {
  if (
    field.required &&
    (value === undefined || value === null || value === "")
  ) {
    return `${field.label} is required`;
  }

  if (field.validation) {
    const { type, pattern, message } = field.validation;

    if (type === "pattern" && pattern) {
      const regex = new RegExp(pattern);
      if (!regex.test(value)) {
        return message || `${field.label} is invalid`;
      }
    }

    if (type === "email" && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        return message || `${field.label} must be a valid email`;
      }
    }

    if (type === "minLength" && field.validation.value) {
      if (value.length < field.validation.value) {
        return (
          message ||
          `${field.label} must be at least ${field.validation.value} characters`
        );
      }
    }
  }

  return null;
};
