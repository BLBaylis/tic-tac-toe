import React, { Component } from "react";
import { connect } from "react-redux";
import { changeGameMode, changeRoute } from "../../actions";
import Icon from "../../components/Icon/Icon";

import { Button, Card } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import CoverTransition from "./CoverTransition";
import { Computer } from "@material-ui/icons";

const styles = theme => ({
  coverTransitionWrapper: {
    height: "50%",
    width: "100%",
    position: "relative"
  },
  cover: {
    backgroundColor: theme.palette.secondary.main
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: "75%",
    width: "75%",
    maxWidth: "680px"
  },
  svg: {
    height: "50%",
    width: "50%",
    color: theme.palette.primary.main
  },
  bradLabel: {
    pointerEvents: "none",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  },
  label: {
    pointerEvents: "none"
  },
  button: {
    pointerEvents: "auto"
  },
  compButton: {
    "&:hover": {
      backgroundColor: theme.palette.primary.light
    }
  },
  pvpButton: {
    "&:hover": {
      backgroundColor: theme.palette.secondary.light
    }
  }
});

const mapDispatchToProps = dispatch => ({
  changeRoute: (route) => dispatch(changeRoute(route)),
  changeGameMode: (gameMode) => dispatch(changeGameMode(gameMode))
})


class GameModeSelect extends Component {
  state = {
    vscompHovered: false,
    pvpHovered: false
  };

  changeHoverState = (buttonType, status) => {
    const hoverType = `${buttonType}Hovered`;
    this.setState({ [hoverType]: status });
  };

  handleClick = (gameMode) => {
    this.props.changeGameMode(gameMode);
    this.props.changeRoute("iconSelect")
  }

  render() {
    const { vscompHovered, pvpHovered } = this.state;
    const { classes } = this.props;
    return (
      <React.Fragment>
        <div
          className={classes.coverTransitionWrapper}
          onMouseOver={() => this.changeHoverState("vscomp", true)}
          onMouseLeave={() => this.changeHoverState("vscomp", false)}
        >
          <CoverTransition hovered={vscompHovered} direction="top" />
          <Card raised className={`${classes.bradLabel} ${classes.card}`}>
            <Computer className={`${classes.svg}`} />
            <Button
              size="large"
              color="primary"
              variant="contained"
              className={`${classes.label} ${classes.button} ${
                classes.compButton
              }`}
              onMouseOver={() => this.changeHoverState("vscomp", true)}
              onMouseLeave={() => this.changeHoverState("vscomp", false)}
              onClick={() => this.handleClick("vsComp")}
            >
              VS COMP
            </Button>
          </Card>
        </div>
        <div
          className={classes.coverTransitionWrapper}
          onMouseOver={() => this.changeHoverState("pvp", true)}
          onMouseLeave={() => this.changeHoverState("pvp", false)}
        >
          <CoverTransition
            classes={{
              cover: classes.cover
            }}
            hovered={pvpHovered}
            direction="bottom"
          />
          <Card raised className={`${classes.bradLabel} ${classes.card}`}>
            <Icon className={classes.svg} colour="#f9ab55" icon="swords" />
            <Button
              size="large"
              color="secondary"
              variant="contained"
              className={`${classes.label} ${classes.button} ${
                classes.pvpButton
              }`}
              onMouseOver={() => this.changeHoverState("pvp", true)}
              onMouseLeave={() => this.changeHoverState("pvp", false)}
              onClick={() => this.handleClick("pvp")}
            >
              LOCAL 2P
            </Button>
          </Card>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(connect(null, mapDispatchToProps)(GameModeSelect));
