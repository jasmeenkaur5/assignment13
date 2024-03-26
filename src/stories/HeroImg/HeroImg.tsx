import React from 'react';
import styled from 'styled-components';

interface TitleProps {
  titleColor?: string;
}

interface SubtitleProps {
  subtitleColor?: string;
}

const Section = styled.section<{ backgroundImage: string; parallaxEffect?: boolean }>`
  position: relative;
  width: 100%;
  height: 400px;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
  }

  ${props =>
    props.parallaxEffect &&
    `
    background-attachment: fixed;
  `}
`;

const Title = styled.h1<TitleProps>`
  color: ${props => props.titleColor || '#FFFFFF'};
  position: relative;
  z-index: 1;
`;

const Subtitle = styled.h2<SubtitleProps>`
  color: ${props => props.subtitleColor || '#FFFFFF'};
  position: relative;
  z-index: 1;
  font-weight: 300;
`;

interface HeroSectionProps {
  backgroundImage: string;
  title: string;
  subtitle?: string;
  titleColor?: string;
  subtitleColor?: string;
  parallaxEffect?: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  backgroundImage,
  title,
  subtitle,
  titleColor,
  subtitleColor,
  parallaxEffect = false,
}) => {
  return (
    <Section  data-testid="hero-section"   backgroundImage={backgroundImage} parallaxEffect={parallaxEffect}>
      <Title titleColor={titleColor}>{title}</Title>
      {subtitle && <Subtitle subtitleColor={subtitleColor}>{subtitle}</Subtitle>}
    </Section>
  );
};

export default HeroSection;
