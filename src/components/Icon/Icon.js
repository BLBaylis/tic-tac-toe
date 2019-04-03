import React from "react";
import Button from "./SvgIcons/Button";
import CandyCane from "./SvgIcons/CandyCane";
import Circle from "./SvgIcons/Circle";
import Cross from "./SvgIcons/Cross";
import Pencils from "./SvgIcons/Pencils";
import Smiley from "./SvgIcons/Smiley";
import Swords from "./SvgIcons/Swords";
import Wheel from "./SvgIcons/Wheel";
import { hex } from "color-convert";
import { withStyles } from "@material-ui/core/styles";

const Icon = ({ icon, colour, bgColour = bgColourCalculator(colour) }) => {
  return (
    <React.Fragment>
      {icon === "button" && <Button colour={colour} bgColour={bgColour} />}
      {icon === "candyCane" && (
        <CandyCane colour={colour} bgColour={bgColour} />
      )}
      {icon === "circle" && <Circle colour={colour} bgColour={bgColour} />}
      {icon === "cross" && <Cross colour={colour} bgColour={bgColour} />}
      {icon === "pencils" && <Pencils colour={colour} bgColour={bgColour} />}
      {icon === "smiley" && <Smiley colour={colour} bgColour={bgColour} />}
      {icon === "swords" && <Swords colour={colour} bgColour={bgColour} />}
      {icon === "wheel" && <Wheel colour={colour} bgColour={bgColour} />}
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
