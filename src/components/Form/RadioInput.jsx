import {
  ErrorMessage,
  Legend,
  OptionLabel,
  OptionsContainer,
  RadioControl,
  RadioOption,
  RadioWrapper,
} from "./FormComponents.styled";

const RadioInput = ({ field, value, onChange, error }) => {
  return (
    <RadioWrapper>
      <fieldset>
        <Legend required={field.required}>{field.label}</Legend>
        <OptionsContainer>
          {field.options.map((option) => (
            <RadioOption key={option.value}>
              <RadioControl
                type="radio"
                id={`${field.name}-${option.value}`}
                name={field.name}
                value={option.value}
                checked={value === option.value}
                onChange={(e) => onChange(field.name, e.target.value)}
                required={field.required}
                {...field.props}
              />
              <OptionLabel htmlFor={`${field.name}-${option.value}`}>
                {option.label}
              </OptionLabel>
            </RadioOption>
          ))}
        </OptionsContainer>
      </fieldset>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </RadioWrapper>
  );
};

export default RadioInput;
