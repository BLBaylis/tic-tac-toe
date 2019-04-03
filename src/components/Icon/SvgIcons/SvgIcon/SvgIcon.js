import React from "react";
import { SvgIcon as MuiSvgIcon } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    height: "100%",
    width: "100%",
    padding: "3px"
  }
};

const SvgIcon = ({ bgColour, children, classes }) => (
  <MuiSvgIcon style={{ backgroundColor: bgColour }} className={classes.root}>
    {children}
  </MuiSvgIcon>
);

export default withStyles(styles)(SvgIcon);
