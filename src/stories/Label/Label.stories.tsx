import React from 'react';
import { Meta, Story } from '@storybook/react';
import StyledLabel from './Label.tsx';
import { StyledLabelProps } from "./Label.types.tsx";
import { userEvent, within } from '@storybook/test';
import { expect } from '@storybook/jest';
export default {
  title: 'StyledLabel',
  component: StyledLabel,
  argTypes: {
    color: { control: 'color' },
    fontSize: { control: 'text' },
    fontWeight: { 
      control: { type: 'select' },
      options: ['normal', 'bold', 'bolder', 'lighter'],
    },
    textTransform: {
      control: { type: 'select' },
      options: ['none', 'capitalize', 'uppercase', 'lowercase'],
    },
    underline: { control: 'boolean' },
    onClick: { action: 'clicked' },
  },
} as Meta;

const Template: Story<StyledLabelProps> = (args) => <StyledLabel {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Default Label',
  color: "#333333",
  fontSize: "18px",
};

export const BoldUppercase = Template.bind({});
BoldUppercase.args = {
  text: 'Bold and Uppercase Label',
  color: "#007BFF",
  fontSize: "20px",
  fontWeight: 'bold',
  textTransform: 'uppercase',
};

export const UnderlinedLabel = Template.bind({});
UnderlinedLabel.args = {
  text: 'Underlined Label',
  fontSize: "16px",
  underline: true,
};

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const label = await canvas.getByText(Default.args.text);
  await userEvent.click(label);
};

BoldUppercase.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const label = await canvas.getByText(BoldUppercase.args.text);
  await expect(label).toBeInTheDocument();
};

UnderlinedLabel.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const label = await canvas.getByText(UnderlinedLabel.args.text);
  const style = window.getComputedStyle(label);
  await expect(style.textDecoration).toContain('underline');
};

