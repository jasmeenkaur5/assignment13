import React from 'react';
import { TextProps } from './Text.types'; 

function Text({
  text,
  color = 'black',
  fontSize = '16px',
  fontWeight = 'normal',
  textDecoration = 'none',
  letterSpacing = 'normal',
  onClick,
}: TextProps) {
  const textStyle = {
    color,
    fontSize,
    fontWeight,
    textDecoration,
    letterSpacing,
    cursor: onClick ? 'pointer' : 'default',
  };

  return (
    <p onClick={onClick} style={textStyle}>
      {text}
    </p>
  );
}

export default Text;
