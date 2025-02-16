import { describe, it, expect } from "vitest";
import { validateFields } from "../utils/validateFields.utils";

describe("Field Validators", () => {
  describe("Required validation", () => {
    it("validates required fields", () => {
      const field = { name: "name", label: "Name", required: true };

      // Empty value
      expect(validateFields(field, "")).toBe("Name is required");

      // Undefined value
      expect(validateFields(field, undefined)).toBe("Name is required");

      // Null value
      expect(validateFields(field, null)).toBe("Name is required");

      // Valid value
      expect(validateFields(field, "John")).toBe(null);
    });

    it("skips validation for non-required fields", () => {
      const field = { name: "name", label: "Name", required: false };

      expect(validateFields(field, "")).toBe(null);
      expect(validateFields(field, undefined)).toBe(null);
      expect(validateFields(field, null)).toBe(null);
    });
  });

  describe("Pattern validation", () => {
    it("validates against regex pattern", () => {
      const field = {
        name: "zipCode",
        label: "ZIP Code",
        validation: {
          type: "pattern",
          pattern: "^\\d{5}$",
          message: "ZIP code must be 5 digits",
        },
      };

      // Invalid values
      expect(validateFields(field, "123")).toBe("ZIP code must be 5 digits");
      expect(validateFields(field, "1234a")).toBe("ZIP code must be 5 digits");
      expect(validateFields(field, "123456")).toBe("ZIP code must be 5 digits");

      // Valid value
      expect(validateFields(field, "12345")).toBe(null);
    });

    it("uses default message when custom message is not provided", () => {
      const field = {
        name: "zipCode",
        label: "ZIP Code",
        validation: {
          type: "pattern",
          pattern: "^\\d{5}$",
        },
      };

      expect(validateFields(field, "123")).toBe("ZIP Code is invalid");
    });
  });

  describe("Email validation", () => {
    it("validates email format", () => {
      const field = {
        name: "email",
        label: "Email",
        validation: {
          type: "email",
          message: "Please enter a valid email",
        },
      };

      // Invalid emails
      expect(validateFields(field, "not-an-email")).toBe(
        "Please enter a valid email",
      );
      expect(validateFields(field, "still@not")).toBe(
        "Please enter a valid email",
      );
      expect(validateFields(field, "@missing-part.com")).toBe(
        "Please enter a valid email",
      );

      // Valid emails
      expect(validateFields(field, "valid@example.com")).toBe(null);
      expect(validateFields(field, "also.valid@sub.domain.co.uk")).toBe(null);
    });

    it("uses default message when custom message is not provided", () => {
      const field = {
        name: "email",
        label: "Email",
        validation: { type: "email" },
      };

      expect(validateFields(field, "not-an-email")).toBe(
        "Email must be a valid email",
      );
    });

    it("skips validation for empty values", () => {
      const field = {
        name: "email",
        label: "Email",
        validation: { type: "email" },
      };

      expect(validateFields(field, "")).toBe(null);
    });
  });

  describe("Min length validation", () => {
    it("validates minimum length", () => {
      const field = {
        name: "password",
        label: "Password",
        validation: {
          type: "minLength",
          value: 8,
          message: "Password must be at least 8 characters",
        },
      };

      // Too short
      expect(validateFields(field, "short")).toBe(
        "Password must be at least 8 characters",
      );

      // Long enough
      expect(validateFields(field, "long-enough-password")).toBe(null);
    });

    it("uses default message when custom message is not provided", () => {
      const field = {
        name: "password",
        label: "Password",
        validation: {
          type: "minLength",
          value: 8,
        },
      };

      expect(validateFields(field, "short")).toBe(
        "Password must be at least 8 characters",
      );
    });
  });
});
