/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

// @material-ui/icons
//import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "../CustomDropdown/CustomDropdown.jsx";
import Button from "../CustomButtons/Button.jsx";

import headerLinksStyle from "../../assets/jss/material-kit-react/components/headerLinksStyle.jsx";

function HeaderLinks({ ...props }) {
  const { classes } = props;
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="About Us"
          buttonProps={{ className: classes.navLink, color: "transparent" }}
          dropdownList={[
            <a
              className={
                classes.dropdownLink //buttonIcon={Apps}
              }
            >
              The School
            </a>,
            <a className={classes.dropdownLink}>Vision & Mission</a>,
            <a className={classes.dropdownLink}>Patreon Message</a>,
            <a className={classes.dropdownLink}>MD Message</a>,
            <a className={classes.dropdownLink}>Principal Message</a>,
            <a className={classes.dropdownLink}>Awards & Achievements</a>
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Programmes"
          buttonProps={{ className: classes.navLink, color: "transparent" }}
          dropdownList={[
            <a
              className={
                classes.dropdownLink //buttonIcon={Apps}
              }
            >
              Early Year Programme
            </a>,
            <a className={classes.dropdownLink}>Primary Year Programme</a>,
            <a className={classes.dropdownLink}>Middle Year Programme</a>
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Infrastructure"
          buttonProps={{ className: classes.navLink, color: "transparent" }}
          dropdownList={[
            <a
              className={
                classes.dropdownLink //buttonIcon={Apps}
              }
            >
              The Labs
            </a>,
            <a className={classes.dropdownLink}>The Library</a>,
            <a className={classes.dropdownLink}>The Cafeteria</a>,
            <a className={classes.dropdownLink}>Safety & Security</a>,
            <a className={classes.dropdownLink}>Health & Hygiene</a>
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Activities"
          buttonProps={{ className: classes.navLink, color: "transparent" }}
          dropdownList={[
            <a
              className={
                classes.dropdownLink //buttonIcon={Apps}
              }
            >
              Arts & Crafts
            </a>,
            <a className={classes.dropdownLink}>Trips & Excursion</a>,
            <a className={classes.dropdownLink}>Performing Arts</a>,
            <a className={classes.dropdownLink}>Global Awareness</a>,
            <a className={classes.dropdownLink}>Sports Activities</a>,
            <a className={classes.dropdownLink}>Classroom Activities</a>
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Downloads"
          buttonProps={{ className: classes.navLink, color: "transparent" }}
          dropdownList={[
            <a
              className={
                classes.dropdownLink //buttonIcon={Apps}
              }
            >
              Leave Application
            </a>,
            <a className={classes.dropdownLink}>Syllabus</a>,
            <a className={classes.dropdownLink}>Activity Plan</a>
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Admission"
          buttonProps={{ className: classes.navLink, color: "transparent" }}
          dropdownList={[
            <a
              className={
                classes.dropdownLink //buttonIcon={Apps}
              }
            >
              Admission Overview & Pocess
            </a>,
            <a className={classes.dropdownLink}>Fee Structure</a>,
            <a className={classes.dropdownLink}>Admission Enquiry Form</a>,
            <a className={classes.dropdownLink}>Admission Registration Form</a>,
            <a className={classes.dropdownLink}>Transportation</a>
          ]}
        />
      </ListItem>
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
