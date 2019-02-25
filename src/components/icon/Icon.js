import React from "react";
import ButtonSvg from "./svgComponents/ButtonSvg";
import CandyCaneSvg from "./svgComponents/CandyCaneSvg";
import CircleSvg from "./svgComponents/CircleSvg";
import CrossSvg from "./svgComponents/CrossSvg";
import PencilsSvg from "./svgComponents/PencilsSvg";
import SmileySvg from "./svgComponents/SmileySvg";
import SwordsSvg from "./svgComponents/SwordsSvg";
import WheelSvg from "./svgComponents/WheelSvg";
import { hex } from "color-convert";

const Icon = ({ icon, colour, bgColour }) => {
  const bgColourChecked = bgColour || bgColourCalculator(colour);
  return (
    <React.Fragment>
      {icon === "button" && (
        <ButtonSvg colour={colour} bgColour={bgColourChecked} />
      )}
      {icon === "candyCane" && (
        <CandyCaneSvg colour={colour} bgColour={"#fff"} />
      )}
      {icon === "circle" && (
        <CircleSvg colour={colour} bgColour={bgColourChecked} />
      )}
      {icon === "cross" && (
        <CrossSvg colour={colour} bgColour={bgColourChecked} />
      )}
      {icon === "pencils" && (
        <PencilsSvg colour={colour} bgColour={bgColourChecked} />
      )}
      {icon === "smiley" && (
        <SmileySvg colour={colour} bgColour={bgColourChecked} />
      )}
      {icon === "swords" && (
        <SwordsSvg colour={colour} bgColour={bgColourChecked} />
      )}
      {icon === "wheel" && (
        <WheelSvg colour={colour} bgColour={bgColourChecked} />
      )}
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
