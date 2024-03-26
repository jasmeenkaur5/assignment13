export interface ProfileCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  subtitle: string;
  borderColor?: string;
  imageShape?: 'circle' | 'square';
  shadowEffect?: boolean;
}