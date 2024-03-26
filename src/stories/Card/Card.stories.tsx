import React from 'react';
import { Meta, Story } from '@storybook/react';
import Card from './Card.tsx';
import { CardProps } from './Card.types';
import { userEvent, within } from '@storybook/test';

export default {
  title: 'Card',
  component: Card,
  argTypes: {
    imageUrl: { control: 'text' },
    alignText: {
      control: 'radio',
      options: ['left', 'center', 'right'],
    },
    hoverEffect: { control: 'boolean' },
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const InteractiveCard = Template.bind({});
InteractiveCard.args = {
  title: 'Interactive Card',
  content: 'This is an interactive card. It can contain images, align text, and even have a hover effect!',
  hoverEffect: true,
  backgroundColor: '#f0f0f0',
};


InteractiveCard.play = async ({ canvasElement }) => {

  const canvas = within(canvasElement);

  const card = canvas.getByText('This is an interactive card. It can contain images, align text, and even have a hover effect!');

  await userEvent.hover(card);
};