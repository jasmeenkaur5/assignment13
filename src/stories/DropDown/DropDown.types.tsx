export interface DropdownProps {
  options: string[];
  placeholder?: string;
  multiSelect?: boolean;
  searchable?: boolean;
  disabled?: boolean;
  onChange: (selectedOption: string | string[]) => void;
}

  