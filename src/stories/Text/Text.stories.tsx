import React from 'react';
import { Meta, Story } from '@storybook/react';
import Text from './Text.tsx';
import { TextProps } from "./Text.types.tsx";
import { userEvent, within } from '@storybook/test';
import { expect } from '@storybook/jest';

export default {
  title: 'Text',
  component: Text,
  argTypes: {
    color: { control: 'color' },
    fontSize: { control: 'text' },
    fontWeight: { 
      control: { type: 'select' },
      options: ['normal', 'bold'],
    },
    textDecoration: {
      control: { type: 'radio' },
      options: ['none', 'underline', 'line-through'],
    },
    letterSpacing: { control: 'text' },
    onClick: { action: 'clicked' },
  },
} as Meta;

const Template: Story<TextProps> = (args) => <Text {...args} />;

export const Example = Template.bind({});
Example.args = {
  text: 'Click Me!',
  color: '#007BFF',
  fontSize: '20px',
  fontWeight: 'bold',
  textDecoration: 'underline',
  letterSpacing: '2px',
};

Example.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const textElement = await canvas.getByText(Example.args.text);
  await expect(textElement).toBeInTheDocument();
};

Example.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const textElement = await canvas.getByText(Example.args.text);
  await userEvent.click(textElement);
};
