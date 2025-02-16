import styled from "styled-components";

export const InputWrapper = styled.div`
  margin-bottom: 1rem;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: ${(props) => (props.required ? "bold" : "normal")};

  &::after {
    content: ${(props) => (props.required ? '"*"' : '""')};
    color: red;
    margin-left: 0.25rem;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid ${(props) => (props.hasError ? "red" : "#ccc")};
  border-radius: 4px;

  &:focus {
    outline: none;
    border-color: #0066ff;
    box-shadow: 0 0 0 2px rgba(0, 102, 255, 0.2);
  }
`;

export const ErrorMessage = styled.div`
  color: red;
  font-size: 0.85rem;
  margin-top: 0.25rem;
`;

export const SelectWrapper = styled.div`
  margin-bottom: 1rem;
`;

export const Select = styled.select`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid ${(props) => (props.hasError ? "red" : "#ccc")};
  border-radius: 4px;

  &:focus {
    outline: none;
    border-color: #0066ff;
    box-shadow: 0 0 0 2px rgba(0, 102, 255, 0.2);
  }
`;

export const CheckboxWrapper = styled.div`
  margin-bottom: 1rem;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const CheckboxInput = styled.input`
  margin: 0;
`;

export const RadioWrapper = styled.div`
  margin-bottom: 1rem;
`;

export const Legend = styled.legend`
  font-weight: ${(props) => (props.required ? "bold" : "normal")};
  margin-bottom: 0.5rem;

  &::after {
    content: ${(props) => (props.required ? '"*"' : '""')};
    color: red;
    margin-left: 0.25rem;
  }
`;

export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RadioOption = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

export const RadioControl = styled.input`
  margin: 0;
`;

export const OptionLabel = styled.label`
  margin-left: 0.5rem;
`;

export const Form = styled.form`
  margin: 0 auto;
  min-width: 500px;
  padding: 2rem;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const FormTitle = styled.h2`
  margin-top: 0;
  margin-bottom: 1.5rem;
  color: #333;
  text-align: center;
`;

export const SubmitButton = styled.button`
  background-color: #0066ff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0052cc;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 102, 255, 0.4);
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;
