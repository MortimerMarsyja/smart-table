import React from 'react';
// styles
import StyledLogo from './Logo.style';

const Logo = ({ size,className }:{size:string,className:string}):JSX.Element => (
  <StyledLogo>
    <svg
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
    >
      <path d="m19.5 8.2c-1.5-3.2-4.6-5.2-8.3-5.2-5 0-9.1 4-9.1 9 0 5.3 4.5 9.5 9.9 9 1.3-2.7 4-4.2 4.8-4.7 1.2-.6 2.1-1.6 2.6-2.7.2-.3.3-.7.7-1.1.9-.5 1.6-.5 1.7-.5 0-1.6-.9-3.1-2.3-3.8zm-4.8 1.6c-.608 0-1.1-.492-1.1-1.1s.492-1.1 1.1-1.1c.607 0 1.1.492 1.1 1.1 0 .607-.493 1.1-1.1 1.1z" />
    </svg>
  </StyledLogo>
);

export default Logo;
