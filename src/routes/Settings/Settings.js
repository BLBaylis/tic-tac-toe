import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { unstable_useMediaQuery as useMediaQuery } from "@material-ui/core/useMediaQuery";
import { Card, Grid } from "@material-ui/core";
import AppBar from "./AppBar/AppBar";
import Form from "./Form/Form";

const styles = {
  root: {
    height: "100%"
  },
  grid: {
    position: "relative",
    top: "50px",
    height: "calc(100% - 50px)"
  },
  formMobile: {
    position: "relative",
    top: "70px"
  },
  card: {
    width: "100%",
    maxWidth: "680px",
    margin: "50px auto"
  }
};

const Settings = ({ classes, changeRoute }) => {
  const query700px = useMediaQuery("(min-width:700px)");
  return (
    <div className={classes.root}>
      <AppBar />
      {query700px && (
        <Grid
          className={classes.grid}
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Card className={classes.card}>
            <Form changeRoute={changeRoute} />
          </Card>
        </Grid>
      )}
      {!query700px && <Form className={classes.formMobile} />}
    </div>
  );
};

export default withStyles(styles)(Settings);
