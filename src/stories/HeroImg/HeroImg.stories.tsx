import React from 'react';
import { Meta, Story } from '@storybook/react';
import HeroSection from './HeroImg.tsx';
import { HeroSectionProps } from './HeroImg.types';
import { within } from '@storybook/test';
import { expect } from '@storybook/jest';
export default {
  title: 'HeroSection',
  component: HeroSection,
  argTypes: {
    backgroundImage: {
      control: 'text',
      description: 'URL of the background image',
    },
    title: {
      control: 'text',
    },
    subtitle: {
      control: 'text',
    },
    titleColor: {
      control: 'color',
    },
    subtitleColor: {
      control: 'color',
    },
    parallaxEffect: {
      control: 'boolean',
    },
  },
} as Meta;

const Template: Story<HeroSectionProps> = (args) => <HeroSection {...args} />;

export const DefaultHeroSection = Template.bind({});
DefaultHeroSection.args = {
  backgroundImage: 'https://via.placeholder.com/1500',
  title: 'Welcome to Our Website!',
  subtitle: 'We are excited to have you here.',
  titleColor: '#FFFFFF',
  subtitleColor: '#F0F0F0',
  parallaxEffect: true,
};

DefaultHeroSection.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const title = await canvas.getByText('Welcome to Our Website!');
  await expect(title).toBeInTheDocument();
  const subtitle = await canvas.getByText('We are excited to have you here.');
  await expect(subtitle).toBeInTheDocument();
};

DefaultHeroSection.play = async ({ args, canvasElement }) => {
  if (args.parallaxEffect) {
    const canvas = within(canvasElement);
    const section = canvas.getByTestId('hero-section'); 
    const style = window.getComputedStyle(section);
    await expect(style.backgroundAttachment).toBe('fixed');
  }
};
