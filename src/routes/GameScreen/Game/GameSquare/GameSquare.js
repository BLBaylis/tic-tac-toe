import React from "react";
import styles from "./GameSquare.module.scss";
import Icon from "../../../../components/Icon/Icon";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const JSstyles = {
  root: {
    backgroundColor : "#fff",
    borderRadius: 0,
    padding: 0,
    minHeight: "40px",
    maxHeight: "100%",
    minWidth: "40px",
    maxWidth: "100%",
  }
}

const GameSquare = ({ classes, value, onClick, iconInfo, keyProp }) => {
  const { userIcon, userIconColour, compIcon, compIconColour } = iconInfo;
  return (
    <Button
      disableRipple
      focusRipple
      variant = "contained"
      aria-label="grid square"
      className={`${classes.root} ${styles.gameSquare}`}
      onClick={onClick}
    >
      <ReactCSSTransitionGroup
        transitionName="fade"
        transitionEnterTimeout={1000}
        transitionLeaveTimeout={150}
      >
        {value === "user" && (
          <Icon key={keyProp} icon={userIcon} colour={userIconColour} />
        )}
        {value === "comp" && (
          <Icon key={keyProp} icon={compIcon} colour={compIconColour} />
        )}
      </ReactCSSTransitionGroup>
    </Button>
  );
};

export default withStyles(JSstyles)(GameSquare);
