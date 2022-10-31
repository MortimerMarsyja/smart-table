import React from 'react';
import StyledCount from './countComponent.style';

const CountComponent = ({ value, addFunction, substractFunction }:
  { value: number, addFunction: Function, substractFunction: Function }): JSX.Element => {
  const substractHander = (event: React.MouseEvent) => {
    substractFunction();
  };
  const addittionHandler = (event: React.MouseEvent) => {
    addFunction();
  };
  return (
    <StyledCount>
      <button type="button" className="small" onClick={substractHander}>-</button>
      <p>{value}</p>
      <button type="button" className="small" onClick={addittionHandler}>+</button>
    </StyledCount>
  );
};

export default CountComponent;
