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
import { withStyles } from '@material-ui/core/styles';

const styles = ({
  svg: {
    display: "block",
    maxHeight: "100%",
    width: "100%",
    maxWidth: "100%",
  }
})

const Icon = ({ icon, colour, bgColour, className, classes }) => {
  const combinedClasses = `${classes.svg} ${className}`;
  const bgColourChecked = bgColour || bgColourCalculator(colour);
  return (
    <React.Fragment>
      {icon === "button" && (
        <ButtonSvg
          classes={combinedClasses}
          colour={colour}
          bgColour={bgColourChecked}
        />
      )}
      {icon === "candyCane" && (
        <CandyCaneSvg classes={combinedClasses} colour={colour} bgColour={"#fff"} />
      )}
      {icon === "circle" && (
        <CircleSvg
          classes={combinedClasses}
          colour={colour}
          bgColour={bgColourChecked}
        />
      )}
      {icon === "cross" && (
        <CrossSvg
          classes={combinedClasses}
          colour={colour}
          bgColour={bgColourChecked}
        />
      )}
      {icon === "pencils" && (
        <PencilsSvg
          classes={combinedClasses}
          colour={colour}
          bgColour={bgColourChecked}
        />
      )}
      {icon === "smiley" && (
        <SmileySvg
          classes={combinedClasses}
          colour={colour}
          bgColour={bgColourChecked}
        />
      )}
      {icon === "swords" && (
        <SwordsSvg
          classes={combinedClasses}
          colour={colour}
          bgColour={bgColourChecked}
        />
      )}
      {icon === "wheel" && (
        <WheelSvg
          classes={combinedClasses}
          colour={colour}
          bgColour={bgColourChecked}
        />
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

export default withStyles(styles)(Icon);
