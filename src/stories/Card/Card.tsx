import React from 'react';
import styled, { css } from 'styled-components';
import { CardProps } from './Card.types';

const CardWrapper = styled.div<{ $hoverEffect?: boolean; $backgroundColor?: string }>`
  background-color: ${({ $backgroundColor }) => $backgroundColor || '#fff'};
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;

  ${({ $hoverEffect }) =>
    $hoverEffect &&
    css`
      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
      }
    `}
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
`;

const CardContent = styled.div<{ $alignText: 'left' | 'center' | 'right' }>`
  padding: 20px;
  text-align: ${({ $alignText }) => $alignText};
`;

function Card({ title, content, imageUrl, alignText = 'left', hoverEffect = false, backgroundColor }: CardProps) {
  return (
    <CardWrapper $hoverEffect={hoverEffect} $backgroundColor={backgroundColor}>
      {imageUrl && <CardImage src={imageUrl} alt="Card image" />}
      <CardContent $alignText={alignText}>
        <h2>{title}</h2>
        <p>{content}</p>
      </CardContent>
    </CardWrapper>
  );
}

export default Card;
