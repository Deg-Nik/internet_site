import styled from "@emotion/styled";

interface ButtonComponentProps {
  $isRed: boolean;
  $isGradientBlue: boolean;
  $isReversGradientBlue: boolean;
}

const generateButtonColor = (isReversGradientBlue: boolean, isGradientBlue: boolean, isRed: boolean, disabled: boolean | undefined) => {
  if (disabled) {
    return "#acacacff";
  } else {
    if (isRed) {
      return "#fc3333ff";
    }
    else if (isGradientBlue){
      return "linear-gradient(to right, blue, rgba(0, 10, 66, 0.9))"
    }
    else if (isReversGradientBlue){
      return "linear-gradient(to left, blue, rgba(0, 10, 66, 0.9))"
    }
     else {
      return "#494a64";
    }
  }
};

const generateButtonColorOnHover = (
  isRed: boolean,
  disabled: boolean | undefined
) => {
  if (disabled) {
    return "#acacacff";
  } else {
    if (isRed) {
      return "#ff6868ff";
    } else {
      return "rgb(97, 102, 255)";
    }
  }
};

export const ButtonComponent = styled.button<ButtonComponentProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  border-radius: 50%;
  padding: 0;
  height: 70px;
  width: 100%;
  font-family: fantasy;
  background: ${({ $isReversGradientBlue, $isGradientBlue, $isRed, disabled }) =>
    generateButtonColor($isReversGradientBlue, $isGradientBlue, $isRed, disabled)};
  color: #ffffff;
  font-size: 30px;
  font-weight: bold;
  font-size: clamp(16px, 4vw, 30px);
  font-weight: bold;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  &:hover {
    background-color: ${({ $isRed, disabled }) =>
      generateButtonColorOnHover($isRed, disabled)};
  }

  @media (max-width: 1024px) {
    height: 60px;
  }

  @media (max-width: 768px) {
    height: 50px;
  }
`;