import { InputWrapper, InputLabel, InputComponent, ErrorText } from "./styles";
import { type InputProps } from "./types";

function Input({
  id,
  name,
  type,
  placeholder,
  label,
  error = undefined,
  disabled = false,
  value,
  onChange,
}: InputProps) {
  return (
    <InputWrapper>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <InputComponent
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        $error={error}
        disabled={disabled}
        value={value}
        onChange={onChange}
      />
      {!!error && <ErrorText>{error}</ErrorText>}
    </InputWrapper>
  );
}

export default Input;
