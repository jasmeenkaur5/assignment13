interface Option {
  label: string;
  value: string;
}

export interface CustomRadioButtonProps {
  options: Option[];
  name: string; 
  selectedColor?: string;
  hoverColor?: string;
  onChange: (selectedValue: string) => void;
  disabled?: boolean;
}