import { ButtonComponent } from "./styles";
import { type ButtonProps } from "./types";

function Button({ name = "Send", type = "button", onClick, isReversGradientBlue = false, isGradientBlue = false, isRed= false, isDisabled= false }: ButtonProps) {
  return (
    <ButtonComponent $isReversGradientBlue={isReversGradientBlue} $isGradientBlue ={isGradientBlue} $isRed={isRed} disabled={isDisabled} type={type} onClick={onClick}>
      {name}
    </ButtonComponent>
  );
}

export default Button;
