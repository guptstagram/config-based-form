import TextInput from "./TextInput";
import SelectInput from "./SelectInput";
import Checkbox from "./Checkbox";
import RadioInput from "./RadioInput";

const componentMap = {
  text: TextInput,
  email: TextInput,
  password: TextInput,
  number: TextInput,
  select: SelectInput,
  checkbox: Checkbox,
  radio: RadioInput,
};

export default componentMap;
