import React from 'react';
import { Meta, Story } from '@storybook/react';
import ProfileCard from './Img.tsx';
import {ProfileCardProps} from "./Img.types.tsx";
import { within } from '@storybook/test';
import { expect } from '@storybook/jest';

export default {
  title: 'ProfileCard',
  component: ProfileCard,
  argTypes: {
    borderColor: { control: 'color' },
    imageShape: {
      control: { type: 'radio' },
      options: ['circle', 'square'],
    },
    shadowEffect: { control: 'boolean' },
  },
} as Meta;

const Template: Story<ProfileCardProps> = (args) => <ProfileCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  imageSrc: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1080&fit=crop&auto=format',
  imageAlt: 'Profile Image',
  title: 'Jasmeen Kaur',
  subtitle: 'Software Engineer',
  borderColor: '#007BFF',
  imageShape: 'circle',
  shadowEffect: true,
};


Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const image = canvas.getByAltText('Profile Image');
  await expect(image).toBeInTheDocument();
  const title = canvas.getByText('Jasmeen Kaur');
  await expect(title).toBeInTheDocument();
  const subtitle = canvas.getByText('Software Engineer');
  await expect(subtitle).toBeInTheDocument();
};

Default.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);
  const card = canvas.getByTestId('profile-card');

  if (args.shadowEffect) {
    const style = window.getComputedStyle(card);
    await expect(style.boxShadow).not.toBe('none');
  } else {
    const style = window.getComputedStyle(card);
    await expect(style.boxShadow).toBe('none');
  }
};

