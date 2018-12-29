import React, { Component } from "react";
import Head from "../src/components/Header/Header.jsx";
import HeaderLinks from "../src/components/Header/HeaderLinks.jsx";

export default class header2 extends Component {
  render() {
    return (
      <div>
        <Head
          color="dark"
          //routes={dashboardRoutes}
          brand="S D Public School"
          rightLinks={<HeaderLinks />}
          changeColorOnScroll={{
            height: 400,
            color: "rosy"
          }}
          //{...rest}
        />
      </div>
    );
  }
}
