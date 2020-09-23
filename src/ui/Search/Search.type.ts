export interface SearchProps<T> {
  className?: string;
  getOptionLabel: (option: T) => string;
  loading?: boolean;
  onChange?: (option: T) => void;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  options?: T[];
  value: string;
}
