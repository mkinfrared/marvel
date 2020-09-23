export interface InputProps {
  forwardRef?: React.Ref<HTMLInputElement>;
  label?: string;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: "text" | "password";
  value: string;
}
