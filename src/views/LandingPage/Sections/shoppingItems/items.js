import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Item from "./item";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

function FullWidthGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Item />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Item />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Item />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Item />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Item />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Item />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Item />
        </Grid>
      </Grid>
    </div>
  );
}

FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FullWidthGrid);
