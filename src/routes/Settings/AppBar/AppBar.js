import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const styles = theme => {
  return {
    root: {
      flexGrow: 1
    },
    appBar: {
      backgroundColor: theme.palette.secondary.main,
      position: "absolute"
    }
  };
};

function SimpleAppBar(props) {
  const { classes } = props;
  return (
    <React.Fragment>
      <div className={classes.root}>
        <AppBar color="primary" position="static" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" color="inherit">
              Settings
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    </React.Fragment>
  );
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleAppBar);
