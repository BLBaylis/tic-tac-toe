import React from "react";
import SvgIcon from "./SvgIcon/SvgIcon";

const Cross = ({ bgColour, colour }) => (
  <SvgIcon bgColour={bgColour}>
    <g
      id="g4326"
      transform="matrix(31.424648,0,0,31.457888,0.59053775,0.47721814)"
      style={{ stroke: colour }}
    >
      <path
        style={{ strokeWidth: 0.03180537 }}
        d="M 0.00465846,0.73019984 0.71755802,0.01688217"
        id="path5999"
      />
      <path
        id="path6001"
        d="M -0.00552659,0.73803206 0.73008813,8.5089636e-4"
        style={{ strokeWidth: 0.03730771 }}
      />
      <path
        style={{ strokeWidth: 0.03730771 }}
        d="M 0.73008813,0.73803206 -0.00552659,8.5089636e-4"
        id="path6003"
      />
    </g>
  </SvgIcon>
);

export default Cross;
