// deps
import React, { useState } from 'react';
// components
import SegmentComponent from './components/SegmentComponent';
// components
import StyledDonutGraph from './donutGraph.style';

interface labelInterface {
  label: string;
  value: number;
}

interface DonutGraphProps {
  colors: string[];
  values: labelInterface[];
  icons: JSX.Element[]|string[];
  initialOffset:number;
}

const DonutGraph = ({
  colors, values, icons, initialOffset,
}:DonutGraphProps):JSX.Element => {
  const [label, setLabel] = useState({ segmentData: values[0], idx: 0 });
  let valueSum = 0;

  function getOffset(value:number):number {
    let thisOffset;
    if (valueSum === 0) {
      thisOffset = initialOffset;
    } else {
      thisOffset = 100 - valueSum + initialOffset;
    }
    valueSum += value;
    return thisOffset;
  }

  const handleGetLable = (labelInfo:any):void => {
    setLabel(labelInfo);
  };

  return (
    <StyledDonutGraph className="donut">
      <svg width="80px" height="100%" viewBox="0 0 42 42">
        <circle
          className="donut-ring"
          cx="21"
          cy="21"
          r="15.91549430918954"
          fill="transparent"
          stroke="#d2d3d4"
          strokeWidth="8"
        />
        {values.map((segment, idx) => {
          const calculatedOffset = getOffset(segment.value);
          return (
            <SegmentComponent
              key={idx}
              idx={idx}
              color={colors[idx]}
              offset={calculatedOffset}
              labelGetterFunc={handleGetLable}
              segmentData={segment}
            />
          );
        })}
        <circle
          className="donut-hole"
          cx="21"
          cy="21"
          r="15.91549430918954"
          fill="transparent"
        />
      </svg>
      {label && label.idx ? (
        <p className="donut-icon">{icons[label.idx]}</p>
      ) : (
        <p className="donut-icon">{icons[0]}</p>
      )}
      {label && (
        <div className="label-wrapper">
          <svg height="28px">
            <circle
              className="label-color"
              cx="10"
              cy="15"
              r="8"
              fill={colors[label.idx] || colors[label.idx]}
              stroke="#d2d3d4"
              strokeWidth="3px"
            />
          </svg>
          <h2>
            {label.segmentData.value}
            %
          </h2>
          <p>
            {label.segmentData.label}
          </p>
        </div>
      )}
    </StyledDonutGraph>
  );
};

export default DonutGraph;
