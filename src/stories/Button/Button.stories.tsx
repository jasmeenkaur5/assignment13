import React from 'react';
import { Meta, Story } from '@storybook/react';
import Button  from './Button.tsx';
import { ButtonProps } from './button.types';
import { expect } from '@storybook/jest';
import { within, userEvent } from '@storybook/testing-library';

export default {
  title: 'New Button',
  component: Button,
  argTypes: {
    variant: {
      control: 'radio',
      options: ['default', 'outline', 'text'],
    },
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
    },
    onClick: { action: 'clicked' },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
    // Demonstrate icon usage in Storybook
    iconLeft: { control: 'none' },
    iconRight: { control: 'none' },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Default Button',
  variant: 'default',
  size: 'medium',
  disabled: false,
  loading: false,
};
Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const button = await canvas.getByRole('button', { name: 'Default Button' });
  await expect(button).toBeInTheDocument();
};



export const Outline = Template.bind({});
Outline.args = {
  ...Default.args,
  label: 'Outline Button',
  variant: 'outline',
};


export const TextButton = Template.bind({});

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled Button',
  disabled: true,
};

Disabled.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const button = await canvas.getByRole('button', { name: 'Disabled Button' });

  const style = window.getComputedStyle(button);

  await expect(style.backgroundColor).toBe('rgb(0, 123, 255)'); 
};

