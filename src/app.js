import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components

import Head from "../comp/header";
import Head2 from "../comp/header2";
import Carousal from "../comp/carousal";
import Div1 from "./div";
import Cards from "../comp/cards";
import Div2 from "../comp/div2";
import Gallery from "../comp/gallery";
import Map from "../comp/map";
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import GridContainer from "./components/Grid/GridContainer.jsx";
import GridItem from "./components/Grid/GridItem.jsx";
import Button from "./components/CustomButtons/Button.jsx";
import HeaderLinks from "./components/Header/HeaderLinks.jsx";
import Parallax from "./components/Parallax/Parallax.jsx";

import landingPageStyle from "./assets/jss/material-kit-react/views/landingPage.jsx";

import Caro from "./carousal";
import Items from "./views/LandingPage/Sections/shoppingItems/items";

// Sections for this page
// import TeamSection from "./Sections/TeamSection.jsx";

// import WorkSection from "./Sections/WorkSection.jsx";

const dashboardRoutes = [];

class LandingPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Head fixed />
        <Head2 />
        <Carousal />
        <Div1 />
        <Cards />
        <Div2 />
        <Gallery />
        <Map />
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(LandingPage);
