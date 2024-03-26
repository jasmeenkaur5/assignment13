import React, { useState } from 'react';
import styled from 'styled-components';
import { DropdownProps } from './DropDown.types';

const DropdownContainer = styled.div`
  position: relative;
  width: 200px;
`;

const StyledSelect = styled.div<{ $disabled?: boolean }>`
  padding: 10px;
  font-size: 16px;
  border: 2px solid #007bff;
  border-radius: 5px;
  background-color: #fff;
  cursor: pointer;
  ${({ $disabled }) =>
    $disabled &&
    `
    background-color: #f0f0f0;
    cursor: not-allowed;
  `}
`;

const OptionsContainer = styled.div`
  position: absolute;
  width: 100%;
  border: 2px solid #007bff;
  border-top: none;
  max-height: 200px;
  overflow-y: auto;
  background-color: #fff;
  z-index: 1;
`;

const Option = styled.div`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #007bff;
    color: #fff;
  }
`;

const SearchInput = styled.input`
  width: calc(100% - 20px);
  padding: 10px;
  margin: 10px;
  border: 1px solid #ccc;
`;

function Dropdown({ options, placeholder, multiSelect = false, searchable = false, disabled = false, onChange }: DropdownProps) {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [displayOptions, setDisplayOptions] = useState(options);
  const [showOptions, setShowOptions] = useState(false);

  const toggleOption = (option: string) => {
    if (multiSelect) {
      const newSelectedOptions = selectedOptions.includes(option)
        ? selectedOptions.filter((selectedOption) => selectedOption !== option)
        : [...selectedOptions, option];
      setSelectedOptions(newSelectedOptions);
      onChange(newSelectedOptions);
    } else {
      setSelectedOptions([option]);
      onChange(option);
      setShowOptions(false); 
    }
  };

  const filterOptions = (searchTerm: string) => {
    if (!searchable) return;
    const filteredOptions = options.filter((option) =>
      option.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setDisplayOptions(filteredOptions);
  };

  return (
    <DropdownContainer>
      <StyledSelect onClick={() => !disabled && setShowOptions(!showOptions)} $disabled={disabled}>
        {selectedOptions.length > 0 ? selectedOptions.join(', ') : placeholder}
      </StyledSelect>
      {showOptions && (
        <OptionsContainer>
          {searchable && <SearchInput type="text" onChange={(e) => filterOptions(e.target.value)} placeholder="Search..." />}
          {displayOptions.map((option, index) => (
            <Option key={index} onClick={() => toggleOption(option)}>
              {option}
            </Option>
          ))}
        </OptionsContainer>
      )}
    </DropdownContainer>
  );
}

export default Dropdown;
