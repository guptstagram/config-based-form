# Dynamic Form Renderer

A flexible and powerful React-based form rendering system that generates forms from JSON configurations, with support for conditional rendering and validation.

## Features

- 🔄 **Dynamic Form Generation**: Create complex forms from simple JSON configurations
- 🧩 **Multiple Input Types**: Support for text, email, password, number, select, checkbox, and radio inputs
- 🔍 **Validation**: Built-in validation for required fields, patterns, email format, and numeric ranges
- 🌲 **Conditional Logic**: Show/hide fields based on values of other fields
- 🎨 **Styled Components**: Clean, responsive design using styled-components
- 📦 **Zustand State Management**: Efficient, hook-based state management
- 🧪 **Comprehensive Testing**: Thorough test coverage with Vitest and React Testing Library

## Technologies Used

- **React**: UI library for building component-based interfaces
- **Zustand**: Lightweight state management solution
- **styled-components**: CSS-in-JS library for component styling
- **Vitest**: Fast, modern testing framework compatible with Jest
- **React Testing Library**: Testing utilities focused on user behavior

## Installation

```bash
# Clone the repository
git clone https://github.com/guptstagram/config-based-form
cd config-based-form

# Install dependencies
npm install

# Run development server
npm run dev

# Run tests
npm test
```

## Form Configuration

The form configuration is a JSON object with the following structure:

```javascript
{
  title: "Form Title",                // Optional form title
  fields: [                           // Array of field configurations
    {
      name: "fieldName",              // Unique field identifier
      type: "text",                   // Field type
      label: "Field Label",           // Display label
      required: true,                 // Whether field is required
      placeholder: "Placeholder text",// Input placeholder text
      validation: {                   // Optional validation rules
        type: "email",                // Validation type
        message: "Custom error message" // Custom error message
      },
      conditional: {                  // Optional conditional display rules
        condition: {
          field: "otherField",        // Field this depends on
          operator: "equals",         // Operator (equals, notEquals, etc)
          value: "someValue"          // Value to compare against
        }
      },
      options: [                      // For select, radio, etc.
        { value: "option1", label: "Option 1" },
        { value: "option2", label: "Option 2" }
      ]
    }
    // More fields...
  ],
  submitText: "Submit"                // Text for submit button
}
```

### Supported Field Types

- `text`: Standard text input
- `email`: Email input with validation
- `password`: Password input
- `number`: Numeric input
- `select`: Dropdown select
- `checkbox`: Single checkbox
- `radio`: Radio button group

### Validation Types

- `required`: Field must not be empty
- `email`: Must be valid email format
- `pattern`: Must match specified regex pattern
- `minLength`: Must be at least specified length
- `range`: Must be within specified numeric range

### Conditional Operators

- `equals`: Show when field equals value
- `notEquals`: Show when field doesn't equal value
- `contains`: Show when array field contains value
- `notEmpty`: Show when field is not empty
