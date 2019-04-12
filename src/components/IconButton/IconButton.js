import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { ButtonBase } from "@material-ui/core";
import Icon from "../Icon/Icon";

const styles = {
  buttonBase: {
    display: "block",
    boxShadow:
      "0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12)",
    "&:hover, &:focus": {
      backgroundColor: "rgba(0, 0, 0, 0.08)"
    }
  },
  icon: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: -1,
    backgroundColor: "transparent"
  }
};

const IconButton = ({
  className,
  classes,
  icon,
  colour,
  ...otherProps
}) => {
  return (
    <ButtonBase
      variant="contained"
      classes={{ root: `${classes.buttonBase} ${className}` }}
      {...otherProps}
    >
      <Icon className={classes.icon} icon={icon} colour={colour} />
    </ButtonBase>
  );
};

export default withStyles(styles)(IconButton);
