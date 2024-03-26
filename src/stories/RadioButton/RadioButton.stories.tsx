import React from 'react';
import { Meta, Story } from '@storybook/react';
import CustomRadioButton from './RadioButton.tsx';
import { CustomRadioButtonProps } from "./RadioButton.types.tsx"
import { userEvent, within } from '@storybook/test';
import { expect } from '@storybook/jest';

export default {
  title: 'CustomRadioButton',
  component: CustomRadioButton,
  argTypes: {
    selectedColor: { control: 'color' },
    hoverColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
} as Meta;

const Template: Story<CustomRadioButtonProps> = (args) => <CustomRadioButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  options: [
    { label: 'Option A', value: 'A' },
    { label: 'Option B', value: 'B' },
    { label: 'Option C', value: 'C' },
  ],
  name: "customRadioGroup",
  selectedColor: '#4CAF50',
  hoverColor: '#8BC34A',
  disabled: false,
  onChange: (selectedValue: string) => console.log('Selected:', selectedValue),
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Primary.args,
  disabled: true,
};


Primary.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const optionA = await canvas.getByLabelText('Option A');
  await userEvent.click(optionA);
};

Disabled.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const optionA = await canvas.getByLabelText('Option A');
  await userEvent.click(optionA);
};
