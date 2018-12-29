import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: "100%"
  },
  imgFluid: {
    maxWidth: "100%",
    height: "auto"
  },
  imgRounded: {
    borderRadius: "6px !important"
  },
  imgRoundedCircle: {
    borderRadius: "50%",
    width: "100%",
    height: "auto"
  },
  bgi: {
    height: "auto",
    width: "100%",
    backgroundImage: `url(${"../comp/images/z.jpg"})`
  },
  paper: {
    marginTop: "20px",
    padding: theme.spacing.unit * 2,
    position: "relative",
    maxWidth: "100%",
    color: theme.palette.text.secondary
  },
  img: {
    width: "100%",
    height: "100%"
  }
});

const Div = props => {
  const { classes } = props;
  return (
    <React.Fragment>
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12} md={12} lg={6}>
            <Paper className={classes.paper}>
              <img
                className={classes.img}
                src={require("../comp/images/zz.jpg")}
              />
            </Paper>
          </Grid>

          <Grid item lg={6} xs={12} md={12}>
            <Paper className={classes.paper}>
              <div style={{ paddingTop: "25px", paddingBottom: "80px" }}>
                <h1>Vijaya International School</h1>
                <h3>CBSE Board Affiliation NO. 2131644</h3>
                <p>Nursery to XII Class</p>
                <h3>
                  A coeducational English Medium School, from Nursery to Class
                  XII, affiliated with the Central Board of Secondary Education
                  (CBSE). We are located in a picturesque, pollution-free
                  environment in Agra (15 mins drive from Sanjay Place).
                </h3>
                <p>
                  The school adopts latest technologies and activity oriented
                  methodology to make learning comprehensive and easier. The
                  school is spread over ten acres of lush green campus with
                  futuristically planned : airy class rooms, play areas and a
                  variety of premium facilities.
                </p>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </div>
      <div className={classNames(classes.root)}>
        <Grid container spacing={24}>
          <Grid item xs={12} md={12} lg={12}>
            <Paper className={classNames(classes.paper, classes.bgi)}>
              <Grid container spacing={24}>
                <Grid item lg={3} md={3} sm={3} xs={12}>
                  <img
                    src={require("../comp/images/zz.jpg")}
                    alt="..."
                    className={
                      classes.imgRoundedCircle + " " + classes.imgFluid
                    }
                  />
                  <h1 style={{ color: "white" }}>Active Learning</h1>{" "}
                  <p style={{ color: "white" }}>
                    Active learning is seen as an appropriate way for children
                    and young people to develop vital skills and knowledge and a
                    positive attitude to learning.
                  </p>
                </Grid>
                <Grid item lg={3} md={3} sm={3} xs={12}>
                  <img
                    src={require("../comp/images/zz.jpg")}
                    alt="..."
                    className={
                      classes.imgRoundedCircle + " " + classes.imgFluid
                    }
                  />
                  <h1 style={{ color: "white" }}>Active Learning</h1>{" "}
                  <p style={{ color: "white" }}>
                    Active learning is seen as an appropriate way for children
                    and young people to develop vital skills and knowledge and a
                    positive attitude to learning.
                  </p>
                </Grid>
                <Grid item lg={3} md={3} sm={3} xs={12}>
                  <img
                    src={require("../comp/images/zz.jpg")}
                    alt="..."
                    className={
                      classes.imgRoundedCircle + " " + classes.imgFluid
                    }
                  />
                  <h1 style={{ color: "white" }}>Active Learning</h1>{" "}
                  <p style={{ color: "white" }}>
                    Active learning is seen as an appropriate way for children
                    and young people to develop vital skills and knowledge and a
                    positive attitude to learning.
                  </p>
                </Grid>
                <Grid item lg={3} md={3} sm={3} xs={12}>
                  <img
                    src={require("../comp/images/zz.jpg")}
                    alt="..."
                    className={
                      classes.imgRoundedCircle + " " + classes.imgFluid
                    }
                  />
                  <h1 style={{ color: "white" }}>Active Learning</h1>{" "}
                  <p style={{ color: "white" }}>
                    Active learning is seen as an appropriate way for children
                    and young people to develop vital skills and knowledge and a
                    positive attitude to learning.
                  </p>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
};

Div.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Div);
