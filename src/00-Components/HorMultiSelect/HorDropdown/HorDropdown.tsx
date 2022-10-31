import React, { forwardRef } from 'react';
import {ListItemInterface} from '../MultiselectInterfaces';
import HorListItem from '../HorListItem/HorListItem';

const HorDropdown = forwardRef(({ list, isClicked, handleSelect }:
  {list:ListItemInterface[], isClicked:boolean, handleSelect:Function}, ref):JSX.Element => (
    <div className="hor-dropwdown" ref={ref}>
      <ul className="hor-list">
        {isClicked && list.map((listItem:ListItemInterface) => (
          <HorListItem
            value={listItem}
            label={listItem.label}
            clickHandler={handleSelect}
            disabled={listItem.disabled}
          />
        ))}
      </ul>
    </div>
));

export default HorDropdown;
