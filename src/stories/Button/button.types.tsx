export interface ButtonProps {
  label: string;
  variant?: 'default' | 'outline' | 'text';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
  iconLeft?: JSX.Element;
  iconRight?: JSX.Element;
  onClick?: () => void;
}