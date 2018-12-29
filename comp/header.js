import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import Icon from "@mdi/react";
import { mdiFacebookBox } from "@mdi/js";
import { mdiTwitterBox } from "@mdi/js";
import { mdiGooglePhotos } from "@mdi/js";
import { mdiPhoneInTalk } from "@mdi/js";
import { mdiTelegram } from "@mdi/js";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { fade } from "@material-ui/core/styles/colorManipulator";
import { withStyles } from "@material-ui/core/styles";
import MoreIcon from "@material-ui/icons/MoreVert";
import { Grid } from "@material-ui/core";

const styles = theme => ({
  root: {
    width: "100%"
  },
  button: {
    margin: theme.spacing.unit
  },
  fab: {
    margin: theme.spacing.unit
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
    fontFamily: "Roboto",
    fontSize: "20px",
    [theme.breakpoints.up("xs")]: {
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
    [theme.breakpoints.up("lg")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("lg")]: {
      display: "none"
    }
  }
});

class PrimarySearchAppBar extends React.Component {
  state = {
    anchorEl: null,
    mobileMoreAnchorEl: null
  };

  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  render() {
    const { anchorEl, mobileMoreAnchorEl } = this.state;
    const { classes } = this.props;
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={this.handleMenuClose}>My account</MenuItem>
      </Menu>
    );

    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMobileMenuOpen}
        onClose={this.handleMobileMenuClose}
      >
        <MenuItem>
          <IconButton color="inherit">
            <Icon
              path={mdiFacebookBox}
              size={1}
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
            <Icon
              path={mdiTwitterBox}
              size={1}
              horizontal
              vertical
              rotate={180}
              color="inherit"
            />
          </IconButton>
          <p>Twitter</p>
        </MenuItem>
        <MenuItem>
          <IconButton color="inherit">
            <Icon
              path={mdiGooglePhotos}
              size={1}
              horizontal
              vertical
              rotate={180}
              color="inherit"
            />
          </IconButton>
          Photo Gallery
        </MenuItem>
        <MenuItem>
          <Fab
            style={{ marginTop: "17px", marginRight: "0px" }}
            variant="extended"
            aria-label="Delete"
            className={classes.fab}
          >
            Admission Open
          </Fab>
        </MenuItem>
      </Menu>
    );

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Grid container spacing={8}>
              <IconButton color="inherit">
                <Icon
                  path={mdiPhoneInTalk}
                  size={1}
                  horizontal
                  vertical
                  rotate={180}
                  color="inherit"
                />

                <Typography
                  className={classes.title}
                  variant="h6"
                  color="inherit"
                  noWrap
                  style={{ marginLeft: "3px" }}
                >
                  Call us: +91-8755900250
                </Typography>
              </IconButton>
              <IconButton color="inherit">
                <Icon
                  path={mdiTelegram}
                  size={1}
                  horizontal
                  vertical
                  rotate={180}
                  color="inherit"
                />

                <Typography
                  className={classes.title}
                  variant="h6"
                  color="inherit"
                  noWrap
                  style={{ marginLeft: "3px" }}
                >
                  Mail Us: info@vijayainternationalschool.com
                </Typography>
              </IconButton>

              <div className={classes.grow} />
              <div className={classes.sectionDesktop}>
                <IconButton color="inherit">
                  <Icon
                    path={mdiFacebookBox}
                    size={1}
                    horizontal
                    vertical
                    rotate={180}
                    color="inherit"
                  />
                </IconButton>

                <IconButton color="inherit">
                  <Icon
                    path={mdiTwitterBox}
                    size={1}
                    horizontal
                    vertical
                    rotate={180}
                    color="inherit"
                  />
                </IconButton>

                <Button
                  variant="outlined"
                  href="#outlined-buttons"
                  className={classes.button}
                >
                  <IconButton color="inherit">
                    <Icon
                      path={mdiGooglePhotos}
                      size={1}
                      horizontal
                      vertical
                      rotate={180}
                      color="inherit"
                    />
                  </IconButton>
                  Photo Gallery
                </Button>

                <Fab
                  style={{ marginTop: "17px", marginRight: "0px" }}
                  variant="extended"
                  aria-label="Delete"
                  className={classes.fab}
                >
                  Admission Open
                </Fab>
              </div>

              <div className={classes.sectionMobile}>
                <IconButton
                  aria-haspopup="true"
                  onClick={this.handleMobileMenuOpen}
                  color="inherit"
                >
                  <MoreIcon />
                </IconButton>
              </div>
            </Grid>
          </Toolbar>
        </AppBar>
        {renderMenu}
        {renderMobileMenu}
      </div>
    );
  }
}

PrimarySearchAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PrimarySearchAppBar);
