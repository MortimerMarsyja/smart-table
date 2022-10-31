import React, { useState } from 'react';
import { ListItemInterface } from '../MultiselectInterfaces.ts';
import HorCheckbox from '../../HorCheckbox/HorCheckbox.tsx';

const HorListItem = ({
  value, label, clickHandler, disabled,
}:
  {value:ListItemInterface, label:string, clickHandler:Function, disabled:boolean}):JSX.Element => {
  const [selected, setSelected] = useState(value.selected || false);
  const handleClick = () => {
    setSelected(!selected);
    clickHandler({ ...value, selected: !selected });
  };
  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <li value={value} onClick={handleClick} className={`hor-list-item ${disabled && 'disabled'}`}>
      <p>
        {' '}
        <HorCheckbox size="18px" checked={selected} />
        {' '}
        {label}
      </p>
    </li>
  );
};

export default HorListItem;
