// KEEPING SINGLE DEPTH FILEDS ONLY AS OF NOW
// IT CAN BE DEVIDED FURTHER SECTIONS TOO
// example: {title: fields:[ section: 'BASIC INFO', sectionFields: [] ]}

// `disabled` PROP CAN ALSO ADDED FOR A FIELD, CAN BE USED INCASE WE MOVE TOWARDS THE EDIT FEATURE


// adress multiple fields
// house, city, country, pincode

export const sampleFormConfig = {
  title: "Dynamic Form Example",
  fields: [
    {
      name: "name",
      type: "text",
      label: "Name",
      required: true,
      placeholder: "Enter your full name",
      // show: true/false
      // hide:true,
    },
    {
      name: "adress",
      type:"FIELDS",
      label: "ADress",
      fields:[
        {
          name: "houseno",
          type: "text",
          label: "houseno",
        },
        {
          name: "moreaddress",
          type:"FIELDS",
          label: "moreaddress",
          fields:[
            {
              name: "city",
              type: "text",
              label: "city",
            },
            {
              name: "state",
              type: "text",
              label: "state",
            },
          ]
        }
      ]
    },
    // {
    //   name: "email", // age
    //   type: "email",
    //   label: "Email",
    //   required: true,
    //   placeholder: "Enter your email",
    //   validation: {
    //     type: "email",
    //     message: "Please enter a valid email address",
    //   },
    // },
    // {
    //   name: "age",
    //   type: "number",
    //   inputType: "number",
    //   label: "Age",
    //   required: true,
    //   placeholder: "Enter your age",
    //   props: {
    //     min: 18,
    //     max: 50,
    //   },
    //   validation: {
    //     type: "range",
    //     min: 18,
    //     max: 50,
    //     message: "Age must be between 18 and 50",
    //   },
    // },
    // {
    //   name: "accountType",
    //   type: "select",
    //   label: "Account Type",
    //   required: true,
    //   options: [
    //     { value: "personal", label: "Personal" },
    //     { value: "business", label: "Business" },
    //   ],
    // },
    // {
    //   name: "businessName",
    //   type: "text",
    //   label: "Business Name",
    //   required: true,
    //   placeholder: "Enter your business name",
    //   conditional: {
    //     field: "accountType",
    //     operator: "equals",
    //     value: "business",
    //   },
    // },
    // {
    //   name: "interests",
    //   type: "radio",
    //   label: "Primary Interest",
    //   required: true,
    //   options: [
    //     { value: "technology", label: "Technology" },
    //     { value: "finance", label: "Finance" },
    //     { value: "health", label: "Health & Wellness" },
    //   ],
    // },
    // {
    //   name: "newsletter",
    //   type: "checkbox",
    //   label: "Subscribe to newsletter",
    //   required: false,
    // },
    // {
    //   name: "techNewsletter",
    //   type: "checkbox",
    //   label: "Subscribe to technology updates",
    //   required: false,
    //   conditional: {
    //     field: "interests",
    //     operator: "equals",
    //     value: "technology",
    //   },
    // },
  ],
  submitText: "Create Account",
};
