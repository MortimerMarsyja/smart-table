// Deps
import React, { useRef, useState } from 'react';
// Components
import HorDropDown from './HorDropdown/HorDropdown';
import Icon from '../IconComponent/Icon';
// Hooks
import useDetectOutsideClick from '../../05-Hooks/useClickOutside/useClickOutside';
// Constants
import ICON_LIST from '../../04-Constants/svg/iconList';
// Styles
import StyledHorMultiSelect from './StyledHorMultiSelectComponent.style';
import colorPalette from '../../07-Styles/colorPalette';
// Interfaces
import { ListItemInterface } from './MultiselectInterfaces';

const listFormatter = (list:ListItemInterface[]) => list
  .map((item:ListItemInterface) => (item.selected ? item : { ...item, selected: false }))
  .map((item:ListItemInterface) => (item.disabled ? item : { ...item, disabled: false }));

const HorMultiSelect = ({ label, list }:
  { label: string, list: ListItemInterface[] }): JSX.Element => {
  const dropdownRef = useRef(null);

  const [selectedItems, setSelectedItems] = useState(listFormatter(list));
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const handleClick = () => setIsActive(!isActive);
  const handleSelect = (listed:ListItemInterface):void => {
    if (listed.selected === false) {
      const deselected = selectedItems.map(
        (item) => (item.value === listed.value ? { ...item, selected: false } : item),
      );
      setSelectedItems(deselected);
    }
    if (listed.selected) {
      setSelectedItems(
        selectedItems.map((item) => (item.value === listed.value
          ? { ...item, selected: true } : item)),
      );
    }
  };

  const currentlySelected = selectedItems.filter((item) => item.selected);

  return (
    <StyledHorMultiSelect
      hasSomethingSelected={currentlySelected.length > 0}
      selectWidth="100%"
      dropdownOpened={isActive}
    >
      <p className="hor-label_non-selected">
        {label}
      </p>
      <div
        onClick={handleClick}
        className="menu-trigger"
        role="button"
        tabIndex={0}
      >
        <p style={{ marginLeft: '12px', display: 'flex' }}>
          {currentlySelected.length > 0
            ? currentlySelected.map((item:ListItemInterface):string => item.label).join(', ')
            : label}
        </p>
        <div className="drop-down-icon">
          <Icon color={colorPalette.greyColors[800]} size="26px" icon={isActive ? ICON_LIST.openedEye : ICON_LIST.closedEye} />
        </div>
      </div>
      <HorDropDown
        ref={dropdownRef}
        list={selectedItems}
        isClicked={isActive}
        handleSelect={handleSelect}
      />
    </StyledHorMultiSelect>
  );
};

export default HorMultiSelect;
