import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { ButtonProps } from './button.types';


const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const StyledButton = styled.button<{
  $variant: 'default' | 'outline' | 'text';
  $size: 'small' | 'medium' | 'large';
  $disabled: boolean;
  $loading: boolean;
  $forcePointerEvents?: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: none;
  border-radius: 4px;
  padding: ${({ $size }) => ($size === 'large' ? '12px 24px' : $size === 'medium' ? '10px 20px' : '8px 16px')};
  font-size: ${({ $size }) => ($size === 'large' ? '18px' : $size === 'medium' ? '16px' : '14px')};
  cursor: ${({ $disabled, $loading }) => ($disabled || $loading) ? 'not-allowed' : 'pointer'};
  opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};
  pointer-events: ${({ $disabled, $forcePointerEvents }) => $forcePointerEvents ? 'auto' : ($disabled ? 'none' : 'auto')};
  background-color: ${({ $variant }) => ($variant === 'outline' || $variant === 'text' ? 'transparent' : '#007BFF')};
  color: ${({ $variant }) => ($variant === 'outline' || $variant === 'text' ? '#007BFF' : '#FFFFFF')};
  border: ${({ $variant }) => ($variant === 'outline' ? '2px solid #007BFF' : 'none')};

  &:hover {
    background-color: ${({ $variant, $disabled, $loading }) => !$disabled && !$loading && ($variant === 'outline' || $variant === 'text' ? 'transparent' : '#0056b3')};
    border-color: ${({ $variant, $disabled }) => !$disabled && $variant === 'outline' ? '#0056b3' : 'none'};
  }

  .spinner {
    animation: ${rotate} 2s linear infinite;
  }
`;


function Button({ label, variant = 'default', size = 'medium', disabled = false, loading = false, iconLeft, iconRight, onClick }: ButtonProps) {
  return (
    <StyledButton
      $variant={variant}
      $size={size}
      $disabled={disabled || loading}
      $loading={loading}
      onClick={!loading ? onClick : undefined}
    >
      {loading ? <div className="spinner">🔄</div> : iconLeft}
      {!loading && label}
      {!loading && iconRight}
    </StyledButton>
  );
}

export default Button;
