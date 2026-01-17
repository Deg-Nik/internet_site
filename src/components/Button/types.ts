export type ButtonTypes = "submit" | "reset" | "button" | undefined;


export interface ButtonProps {
  name: string;
  type?: ButtonTypes;
  onClick?: () => void;
  isRed?: boolean;
  isGradientBlue?: boolean;
  isReversGradientBlue?: boolean;
  isDisabled?: boolean;
}