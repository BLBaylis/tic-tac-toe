import React, { Component } from "react";
import { connect } from "react-redux";
import { restartGame, restartGameThenCompMove, changeRoute } from '../../../actions';

import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import RadioButtonsGroupRow from "./RadioButtonsGroupRow";

const styles = theme => ({
  form: {
    display: "flex",
    flexDirection: "column"
  },
  button: {
    alignSelf: "center",
    backgroundColor: theme.palette.secondary.main,
    margin: `0 0 ${theme.spacing.unit * 2}px`,
    display: "inline-block",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light
    }
  }
});

const mapStateToProps = state => {
  const { gridSize, firstMove, gameMode } = state.gameStateReducer;
  return { gridSize, firstMove, gameMode }
}

const mapDispatchToProps = dispatch => ({
  changeRoute: (route) => dispatch(changeRoute(route)),
  restartGame: (gridSize, firstMove, gameMode) =>
    dispatch(restartGame(gridSize, firstMove, gameMode)),
  restartGameThenCompMove: (gridSize, firstMove) =>
    dispatch(restartGameThenCompMove(gridSize, firstMove))
})

class Form extends Component {

  state = {
    gridSize: null,
    firstMove: null,
    gameMode: null
  };

  handleChange = fieldName => event => {
    this.setState({ [fieldName]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const gridSize = this.getData("gridSize");
    const firstMove = this.getData("firstMove");
    const gameMode = this.getData("gameMode");
    console.log(gridSize, firstMove, gameMode);
    this.restartGame(gridSize, firstMove, gameMode);
    this.props.changeRoute("gameScreen");
  };

  restartGame = (gridSize, firstMove, gameMode) => {
    if (firstMove === "user" || gameMode === "pvp") {
      return this.props.restartGame(gridSize, firstMove, gameMode);
    } else {
      return this.props.restartGameThenCompMove(gridSize, firstMove);
    }
  };

  getData = dataType => {
    return this.state[dataType] || String(this.props[dataType]);
  }

  render() {
    const { classes, className } = this.props;
    const formClassName = `${classes.form} ${className}`;
    return (
      <form onSubmit={this.handleSubmit} className={formClassName}>
        <RadioButtonsGroupRow
          fieldSetPublic={"Grid Size"}
          fieldSetPrivate={"gridSize"}
          currentFieldSetValue={this.getData("gridSize")}
          formControlLabelInfo={[
            { value: "3", label: "3 x 3" },
            { value: "5", label: "5 x 5" },
            { value: "7", label: "7 x 7" }
          ]}
          handleChange={this.handleChange}
        />
        <RadioButtonsGroupRow
          fieldSetPublic={"First Move Player"}
          fieldSetPrivate={"firstMove"}
          currentFieldSetValue={this.getData("firstMove")}
          formControlLabelInfo={[
            { value: "user", label: "User" },
            { value: "comp", label: "Comp" }
          ]}
          handleChange={this.handleChange}
        />
        <RadioButtonsGroupRow
          fieldSetPublic={"Game Type"}
          fieldSetPrivate={"gameMode"}
          currentFieldSetValue={this.getData("gameMode")}
          formControlLabelInfo={[
            { value: "vsComp", label: "VS Comp" },
            { value: "pvp", label: "Local 2 Player" }
          ]}
          handleChange={this.handleChange}
        />
        <Button className={classes.button} type="submit" variant="contained">
          Apply Settings
        </Button>
      </form>
    );
  }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Form));
