import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  head: {
    fontSize: "60px",
    fontFamily: "Roboto Condensed",
    textAlign: "center"
  },
  imgg: {
    maxWidth: "100%",
    maxHeight: "100%"
  }
});

function CenteredGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <h1 className={classes.head}>School Gallery</h1>
      <Grid container spacing={24}>
        <Grid item lg={3} md={3} xs={3}>
          <img
            src={require("../comp/images/zz.jpg")}
            className={classes.imgg}
          />
        </Grid>
        <Grid item lg={3} md={3} xs={3}>
          <img
            src={require("../comp/images/zz.jpg")}
            className={classes.imgg}
          />
        </Grid>
        <Grid item lg={3} md={3} xs={3}>
          <img
            src={require("../comp/images/zz.jpg")}
            className={classes.imgg}
          />
        </Grid>
        <Grid item lg={3} md={3} xs={3}>
          <img
            src={require("../comp/images/zz.jpg")}
            className={classes.imgg}
          />
        </Grid>
      </Grid>
      <Grid container spacing={24}>
        <Grid item lg={3} md={3} xs={3}>
          <img
            src={require("../comp/images/zz.jpg")}
            className={classes.imgg}
          />
        </Grid>
        <Grid item lg={3} md={3} xs={3}>
          <img
            src={require("../comp/images/zz.jpg")}
            className={classes.imgg}
          />
        </Grid>
        <Grid item lg={3} md={3} xs={3}>
          <img
            src={require("../comp/images/zz.jpg")}
            className={classes.imgg}
          />
        </Grid>
        <Grid item lg={3} md={3} xs={3}>
          <img
            src={require("../comp/images/zz.jpg")}
            className={classes.imgg}
          />
        </Grid>
      </Grid>
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CenteredGrid);
