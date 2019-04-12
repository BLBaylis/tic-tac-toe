import React from "react";
import { unstable_useMediaQuery as useMediaQuery } from "@material-ui/core/useMediaQuery";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const ControlsButton = props => {
  const isLandscape = useMediaQuery("(orientation: landscape)");
  return isLandscape ? <LandscapeButton {...props} /> : <Button {...props} />;
};

const landscapeStyles = {
  root: {
    display: "inline-block",
    height: '100%'
  }
};

const LandscapeButton = withStyles(landscapeStyles)(props => {
  const newClassName = `${props.classes.root} ${props.className}`;
  return (
    <Button className={newClassName} {...props}>
      {props.children}
    </Button>
  );
});

export default ControlsButton;
