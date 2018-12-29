import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import GridContainer from "../src/components/Grid/GridContainer.jsx";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  button: {
    margin: theme.spacing.unit
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary,
    backgroundImage: `url(${"../comp/images/z.jpg"})`,
    height: "100%"
  },
  img: {
    maxWidth: "100%",
    width: "auto",
    maxHeight: "100vh",
    margin: "0",
    padding: "0"
  },
  head: {
    fontSize: "60px",
    fontFamily: "Helvectica"
  },
  thumb: {
    height: "100%",
    width: "100%",
    maxWidth: "300px",
    maxHeight: "200px",
    borderRadius: "10%"
  }
});

function CenteredGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12} lg={12} md={12} sm={12}>
          <Paper className={classes.paper}>
            <h1 className={classes.head} style={{ color: "white" }}>
              School Events
            </h1>
            <GridContainer>
              <Grid item lg={4} md={4} sm={4} xs={4} />
              <Grid item lg={4} md={4} sm={4} xs={4}>
                <img
                  className={classes.thumb}
                  src={require("../comp/images/zzz.jpg")}
                />
                <h3 style={{ color: "white" }}>Recent Visits</h3>
                <Button
                  href="#text-buttons"
                  color="primary"
                  className={classes.button}
                >
                  Read More
                </Button>
              </Grid>
              <Grid item lg={4} md={4} sm={4} xs={4}>
                <img
                  className={classes.thumb}
                  src={require("../comp/images/zzz.jpg")}
                />
                <h3 style={{ color: "white" }}>Awards and Achievements</h3>
                <Button
                  href="#text-buttons"
                  color="primary"
                  className={classes.button}
                >
                  Read More
                </Button>
              </Grid>
            </GridContainer>
            <GridContainer>
              <Grid item lg={4} md={4} sm={4} xs={4} />
              <Grid item lg={4} md={4} sm={4} xs={4}>
                <img
                  className={classes.thumb}
                  src={require("../comp/images/zzz.jpg")}
                />
                <h3 style={{ color: "white" }}>Recent Visits</h3>
                <Button
                  href="#text-buttons"
                  color="primary"
                  className={classes.button}
                >
                  Read More
                </Button>
              </Grid>
              <Grid item lg={4} md={4} sm={4} xs={4}>
                <img
                  className={classes.thumb}
                  src={require("../comp/images/zzz.jpg")}
                />
                <h3 style={{ color: "white" }}>Awards and Achievements</h3>
                <Button
                  href="#text-buttons"
                  color="primary"
                  className={classes.button}
                >
                  Read More
                </Button>
              </Grid>
            </GridContainer>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CenteredGrid);
