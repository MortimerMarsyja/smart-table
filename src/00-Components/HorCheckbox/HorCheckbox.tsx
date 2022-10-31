import React from 'react';

const HorCheckbox = ({ size, checked }:{size:string, checked:boolean}):JSX.Element => (
  <svg
    width={size}
    height={size}
    className={`checkbox${checked ? '_checked' : ''}`}
    viewBox="0 0 24 24"
    aria-hidden="true"
    data-testid="CheckBoxIcon"
    tabIndex={-1}
  >
    {checked ? (
      <path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
    ) : (
      <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
    )}
  </svg>
);

export default HorCheckbox;
