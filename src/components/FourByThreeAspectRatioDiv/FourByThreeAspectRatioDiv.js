import React from 'react';
import AspectRatioByHeightDiv from "./AspectRatioByHeightDiv/AspectRatioByHeightDiv";
import { unstable_useMediaQuery as useMediaQuery } from "@material-ui/core/useMediaQuery";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  fourByThreeAspectRatioDiv : {
    position: "absolute",
    backgroundColor: "#f8f9fa",
    border: "solid 1px #f8f9fa",
    height: "150vw",
    maxHeight: "100%",
    margin: "0 auto",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    '@media (orientation : landscape)' : {
      height: "66vw",
      maxHeight: "100%",
      width: "auto",
      maxWidth: "100%",
    }
  }
}

const FourByThreeAspectRatioDiv = ({children, classes, className}) => {
  const newClassName = `${classes.fourByThreeAspectRatioDiv} ${className}`
  const isLandscape = useMediaQuery("(orientation:landscape)");
  return isLandscape ? (
    <AspectRatioByHeightDiv className = {newClassName} ratioHeight="200px" ratioWidth="300px">{children}</AspectRatioByHeightDiv>
  ) : (
    <AspectRatioByHeightDiv className = {newClassName} ratioHeight="300px" ratioWidth="200px">{children}</AspectRatioByHeightDiv>
  )
}

export default withStyles(styles)(FourByThreeAspectRatioDiv);