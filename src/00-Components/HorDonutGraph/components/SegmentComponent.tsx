import React, { useState } from 'react';

interface segmentDataInterface {
  label: string;
  value: number;
}

interface SegmentProps {
  segmentData: segmentDataInterface;
  offset: number;
  color: string;
  labelGetterFunc: any;
  idx: number;
}

const SegmentComponent = ({
  segmentData,
  offset,
  color,
  labelGetterFunc,
  idx,
}:SegmentProps):JSX.Element => {
  const [isHovered, setIsHovered] = useState(false);
  const handleOnMouseEnter = () => {
    labelGetterFunc({ segmentData, idx });
    setIsHovered(true);
  };
  return (
    <>
      <circle
        className={`${segmentData.label}-segment ${isHovered ? 'hovered' : ''}`}
        cx="21"
        cy="21"
        r="15.91549430918954px"
        fill="transparent"
        stroke={color}
        strokeWidth="5"
        strokeLinecap="round"
        strokeDasharray={`${segmentData.value} ${100 - segmentData.value}`}
        strokeDashoffset={offset}
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
      />
    </>
  );
};

export default SegmentComponent;
