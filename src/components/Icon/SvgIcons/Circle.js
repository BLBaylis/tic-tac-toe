import React from "react";
import SvgIcon from "./SvgIcon/SvgIcon";

const Circle = ({ bgColour, colour }) => (
  <SvgIcon bgColour={bgColour}>
    <circle
      style={{
        fillOpacity: 0,
        stroke: colour,
        strokeWidth: 1.17305505
      }}
      id="circle1492"
      cy="12.000002"
      cx="12"
      r="11.413472"
    />
  </SvgIcon>
);

export default Circle;
