import { type ChangeEvent } from "react";


export type InputProps = {
  id?: string;
  name: string;
  type?: string;
  placeholder?: string;
  label: string;
  disabled?: boolean;
  error?: string | undefined;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
} 
