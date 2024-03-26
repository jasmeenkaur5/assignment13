import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import {CustomRadioButtonProps} from "./RadioButton.types";


const RadioButtonLabel = styled.label<{ $selectedColor?: string; $hoverColor?: string; $disabled?: boolean }>`
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  padding-left: 25px;
  margin-bottom: 12px;

  &:hover:before {
    background-color: ${({ $hoverColor, $disabled }) => !$disabled && $hoverColor || 'transparent'};
  }

  ${({ $disabled }) =>
    $disabled &&
    css`
      cursor: not-allowed;
      opacity: 0.5;
    `}

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;

    &:checked ~ .checkmark {
      background-color: ${({ $selectedColor }) => $selectedColor || '#2196F3'};
    }

    &:checked ~ .checkmark:after {
      display: block;
    }
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 18px;
    width: 18px;
    background-color: #eee;
    border-radius: 50%;
    transition: background-color 0.2s ease-in-out;

    &:after {
      content: '';
      position: absolute;
      display: none;
      top: 6px;
      left: 6px;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: white;
    }
  }
`;

function CustomRadioButton({ options, name, selectedColor, hoverColor, onChange, disabled }: CustomRadioButtonProps) {
  const [selectedOption, setSelectedOption] = useState<string | undefined>();

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSelectedOption(value);
    onChange(value);
  };

  return (
    <>
      {options.map((option) => (
        <RadioButtonLabel
          key={option.value}
          $selectedColor={selectedColor}
          $hoverColor={hoverColor}
          $disabled={disabled}
        >
          <input
            type="radio"
            value={option.value}
            name={name}
            disabled={disabled}
            checked={selectedOption === option.value}
            onChange={handleOptionChange}
          />
          <span className="checkmark"></span>
          {option.label}
        </RadioButtonLabel>
      ))}
    </>
  );
}

export default CustomRadioButton;
