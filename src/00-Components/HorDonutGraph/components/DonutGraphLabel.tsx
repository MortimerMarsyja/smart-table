import React from 'react';
// components
interface labelInterface {
  text: string;
  value: string;
}

interface DonutGraphLabelProps {
  label: labelInterface;
  icon:JSX.Element|string;
}

const DonutGraphLabel = ({ label, icon }:DonutGraphLabelProps):JSX.Element => {
  console.log(icon)
  return(
    <div className="label-wrapper">
    <span>{icon}</span>
    <p>
      {label.value}
      %
    </p>
  </div>
  )
};

export default DonutGraphLabel;
