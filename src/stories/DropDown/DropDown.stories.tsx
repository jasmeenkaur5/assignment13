import React from 'react';
import { Meta, Story } from '@storybook/react';
import Dropdown from './DropDown.tsx';
import { DropdownProps } from './DropDown.types';
import { within } from '@storybook/test';
import { expect } from '@storybook/jest';

export default {
  title: 'Dropdown',
  component: Dropdown,
  argTypes: {
    multiSelect: {
      control: 'boolean',
    },
    searchable: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
} as Meta;

const Template: Story<DropdownProps> = (args) => <Dropdown {...args} />;

export const EnhancedDropdown = Template.bind({});
EnhancedDropdown.args = {
  options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
  placeholder: 'Select options',
  multiSelect: true,
  searchable: true,
  disabled: false,
  onChange: (selectedOption) => console.log('Selected option:', selectedOption),
};

EnhancedDropdown.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const dropdownToggle = await canvas.getByText('Select options'); 
  await expect(dropdownToggle).toBeInTheDocument();
};


export const DisabledDropdown = Template.bind({});
DisabledDropdown.args = {
  ...EnhancedDropdown.args,
  disabled: true,
};


DisabledDropdown.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const dropdownToggle = await canvas.getByText('Select options'); 
  const style = window.getComputedStyle(dropdownToggle);
  await expect(style.backgroundColor).toBe('rgb(240, 240, 240)');
};



