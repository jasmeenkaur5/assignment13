import React from 'react';
import styled from 'styled-components';

interface ProfileCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  subtitle: string;
  borderColor?: string;
  imageShape?: 'circle' | 'square';
  shadowEffect?: boolean;
}

const Card = styled.div<{ borderColor?: string; shadowEffect?: boolean }>`
  width: 300px;
  padding: 20px;
  border: 2px solid ${({ borderColor }) => borderColor || '#ddd'};
  box-shadow: ${({ shadowEffect }) => (shadowEffect ? '0 4px 8px rgba(0, 0, 0, 0.1)' : 'none')};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Image = styled.img<{ shape?: 'circle' | 'square' }>`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: ${({ shape }) => (shape === 'circle' ? '50%' : '0')};
`;

const Title = styled.h2`
  margin: 0;
  font-size: 1.5rem;
`;

const Subtitle = styled.p`
  margin: 0;
  font-size: 1rem;
  color: #666;
`;

const ProfileCard: React.FC<ProfileCardProps> = ({
  imageSrc,
  imageAlt,
  title,
  subtitle,
  borderColor,
  imageShape = 'square',
  shadowEffect = false,
}) => {
  return (
    <Card  data-testid="profile-card"  borderColor={borderColor} shadowEffect={shadowEffect}>
      <Image src={imageSrc} alt={imageAlt} shape={imageShape} />
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Card>
  );
};

export default ProfileCard;
