

export interface IOption {
  value: string;
  label: string;
}

export interface ISelectProps {
  selected: IOption;
  options: IOption[];
  placeholder?: string;
  status?: 'default' | 'invalid';
  onChange?: (selected: IOption['value']) => void;
}
