import React from 'react';
// styles
import StyledIconComponent from './IconComponent.style';

const Icon = ({ size, icon, color }:
  { size: string, icon: JSX.Element, color: string }):
  JSX.Element => (
    <StyledIconComponent
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      strokeWidth="9"
    >
      {icon}
    </StyledIconComponent>
);

export default Icon;
