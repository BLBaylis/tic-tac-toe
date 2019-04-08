import React, { Component } from "react";
import { connect } from "react-redux";
import { changeGameMode } from "../../actions";
import Icon from "../../components/Icon/Icon";
import GameModeCard from "./GameModeCard";

import { withStyles } from "@material-ui/core/styles";
import CoverTransition from "./CoverTransition";
import { Computer } from "@material-ui/icons";

const styles = theme => ({
  coverTransitionWrapper: {
    height: "50%",
    width: "100%",
    position: "relative",
    "@media (orientation:landscape)": {
      height: "100%",
      width: "50%",
      float: "left"
    }
  },
  icon: {
    height: "50%",
    width: "50%"
  },
  svg: {
    color: theme.palette.primary.main
  }
});

const mapDispatchToProps = dispatch => ({
  changeGameMode: gameMode => dispatch(changeGameMode(gameMode))
});

class GameModeSelect extends Component {
  state = {
    vscompHovered: false,
    pvpHovered: false
  };

  changeHoverState = (buttonType, status) => {
    const hoverType = `${buttonType}Hovered`;
    this.setState({ [hoverType]: status });
  };

  handleClick = gameMode => {
    this.props.changeGameMode(gameMode);
    this.props.changeRoute("iconSelect");
  };

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
          <CoverTransition
            hovered={vscompHovered}
            vertDirection="top"
            colour="primary"
          />
          <GameModeCard
            classes={{ button: classes.compButton }}
            colour="primary"
            label="VS COMP"
            onClick={() => this.handleClick("vsComp")}
            changeHoverState={newHoverState =>
              this.changeHoverState("vscomp", newHoverState)
            }
          >
            <Computer className={`${classes.icon} ${classes.svg}`} />
          </GameModeCard>
        </div>
        <div
          className={classes.coverTransitionWrapper}
          onMouseOver={() => this.changeHoverState("pvp", true)}
          onMouseLeave={() => this.changeHoverState("pvp", false)}
        >
          <CoverTransition
            hovered={pvpHovered}
            vertDirection="bottom"
            colour="secondary"
          />
          <GameModeCard
            classes={{ button: classes.pvpButton }}
            colour="secondary"
            label="LOCAL 2P"
            onClick={() => this.handleClick("pvp")}
            changeHoverState={newHoverState =>
              this.changeHoverState("pvp", newHoverState)
            }
          >
            <Icon className={classes.icon} colour="#f9ab55" icon="swords" />
          </GameModeCard>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(
  connect(
    null,
    mapDispatchToProps
  )(GameModeSelect)
);
