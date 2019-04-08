import React from "react";
import Button from "./SvgComponents/Button";
import CandyCane from "./SvgComponents/CandyCane";
import Circle from "./SvgComponents/Circle";
import Cross from "./SvgComponents/Cross";
import Pencils from "./SvgComponents/Pencils";
import Smiley from "./SvgComponents/Smiley";
import Swords from "./SvgComponents/Swords";
import Wheel from "./SvgComponents/Wheel";
import SvgIcon from "./SvgIcon/SvgIcon";
import { hex } from "color-convert";

const Icon = ({
  colour,
  bgColour = bgColourCalculator(colour),
  className,
  icon
}) => {
  return (
    <React.Fragment>
      <SvgIcon className={className} bgColour={bgColour}>
        {icon === "button" && <Button colour={colour} />}
        {icon === "candyCane" && <CandyCane colour={colour} />}
        {icon === "circle" && <Circle colour={colour} />}
        {icon === "cross" && <Cross colour={colour} />}
        {icon === "pencils" && <Pencils colour={colour} />}
        {icon === "smiley" && <Smiley colour={colour} />}
        {icon === "swords" && <Swords colour={colour} />}
        {icon === "wheel" && <Wheel colour={colour} />}
      </SvgIcon>
    </React.Fragment>
  );
};

const bgColourCalculator = colour => {
  if (!colour) {
    return "#fff";
  }
  const colourBrightness = hex.hsl(`${colour.slice(1)}`)[2];
  if (colourBrightness < 95) {
    return "#fff";
  } else {
    return "#f9ab55";
  }
};

export default Icon;
