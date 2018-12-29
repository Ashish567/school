import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Icon from "@mdi/react";
import Button from "@material-ui/core/Button/Button";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import { fade } from "@material-ui/core/styles/colorManipulator";

import SearchIcon from "@material-ui/icons/Search";
import { mdiFacebookBox } from "@mdi/js";
import { mdiTwitterBox } from "@mdi/js";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary,
    backgroundImage: `url(${"../comp/images/z.jpg"})`,
    height: "300px"
  },
  head: {
    fontSize: "60px",
    fontFamily: "Roboto Condensed",
    textAlign: "center"
  },
  imgg: {
    maxWidth: "100%",
    maxHeight: "100%"
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  title: {
    display: "none",
    textAlign: "center",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing.unit * 3,
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit",
    width: "100%"
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200
    }
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  }
});

function CenteredGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <h1 className={classes.head}>Smart Education</h1>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Paper className={classes.paper} />
        </Grid>
      </Grid>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              className={classes.title}
              variant="h6"
              color="inherit"
              noWrap
            >
              Weekly Newsletter
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{ root: classes.inputRoot, input: classes.inputInput }}
              />
            </div>
            <Button color="inherit">Subscribe</Button>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <MenuItem>
                <IconButton color="inherit">
                  <Icon
                    path={mdiFacebookBox}
                    size={3}
                    horizontal
                    vertical
                    rotate={180}
                    color="inherit"
                  />
                </IconButton>
                <p>Facebook</p>
              </MenuItem>
              <MenuItem>
                <IconButton color="inherit">
                  <Badge badgeContent={4} color="secondary">
                    <Icon
                      path={mdiTwitterBox}
                      size={3}
                      horizontal
                      vertical
                      rotate={180}
                      color="inherit"
                    />
                  </Badge>
                </IconButton>
                <p>Twitter</p>
              </MenuItem>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CenteredGrid);
