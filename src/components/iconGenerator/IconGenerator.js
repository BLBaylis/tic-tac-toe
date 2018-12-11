import React from "react";
import ButtonSvg from "./svgComponents/ButtonSvg";
import CandyCaneSvg from "./svgComponents/CandyCaneSvg";
import CircleSvg from "./svgComponents/CircleSvg";
import CrossSvg from "./svgComponents/CrossSvg";
import PencilsSvg from "./svgComponents/PencilsSvg";
import SmileySvg from "./svgComponents/SmileySvg";
import SwordsSvg from "./svgComponents/SwordsSvg";
import WheelSvg from "./svgComponents/WheelSvg";

const IconGenerator = props => {
  const { icon, colour } = props.iconInfo;
  return (
    <React.Fragment>
      {icon === "button" && <ButtonSvg colour={colour} />}
      {icon === "candyCane" && <CandyCaneSvg colour={colour} />}
      {icon === "circle" && <CircleSvg colour={colour} />}
      {icon === "cross" && <CrossSvg colour={colour} />}
      {icon === "pencils" && <PencilsSvg colour={colour} />}
      {icon === "smiley" && <SmileySvg colour={colour} />}
      {icon === "swords" && <SwordsSvg colour={colour} />}
      {icon === "wheel" && <WheelSvg colour={colour} />}
    </React.Fragment>
  );
};

export default IconGenerator;
