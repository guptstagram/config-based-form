import React from "react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, waitFor, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import DynamicForm from "../components/Form";
import useFormStore from "../store/form.zustand";

// Sample form configuration for testing
const testFormConfig = {
  title: "Test Form",
  fields: [
    {
      name: "fullName",
      type: "text",
      label: "Full Name",
      required: true,
      placeholder: "Enter your full name",
    },
    {
      name: "age",
      type: "number",
      inputType: "number",
      label: "Age",
      required: true,
      placeholder: "Enter your age",
      validation: {
        type: "range",
        min: 18,
        max: 120,
        message: "Age must be between 18 and 120",
      },
    },
    {
      name: "email",
      type: "email",
      label: "Email Address",
      required: true,
      validation: {
        type: "email",
        message: "Please enter a valid email address",
      },
    },
    {
      name: "accountType",
      type: "select",
      label: "Account Type",
      required: true,
      options: [
        { value: "personal", label: "Personal" },
        { value: "business", label: "Business" },
      ],
    },
    {
      name: "businessName",
      type: "text",
      label: "Business Name",
      required: true,
      conditional: {
        condition: {
          field: "accountType",
          operator: "equals",
          value: "business",
        },
      },
    },
    {
      name: "newsletter",
      type: "checkbox",
      label: "Subscribe to newsletter",
    },
  ],
  submitText: "Submit Test Form",
};

describe("DynamicForm Component", () => {
  const mockSubmit = vi.fn();

  beforeEach(() => {
    // Reset the form store before each test
    const { resetForm } = useFormStore.getState();
    resetForm();
  });

  afterEach(() => {
    cleanup();
    vi.resetAllMocks();
  });

  it("renders the form with the correct title", () => {
    render(<DynamicForm formConfig={testFormConfig} onSubmit={mockSubmit} />);
    expect(screen.getByText("Test Form")).toBeInTheDocument();
  });

  it("renders all visible form fields", () => {
    render(<DynamicForm formConfig={testFormConfig} onSubmit={mockSubmit} />);

    // These fields should be visible initially
    expect(screen.getByLabelText(/Full Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Age/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email Address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Account Type/i)).toBeInTheDocument();
    expect(
      screen.getByLabelText(/Subscribe to newsletter/i),
    ).toBeInTheDocument();
  });

  it("shows conditional fields when conditions are met", async () => {
    render(<DynamicForm formConfig={testFormConfig} onSubmit={mockSubmit} />);

    // Select "business" account type
    const selectElement = screen.getByLabelText(/Account Type/i);
    await userEvent.selectOptions(selectElement, "business");

    // Now Business Name should be visible
    await waitFor(() => {
      expect(screen.getByLabelText(/Business Name/i)).toBeInTheDocument();
    });
  });
});
