import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
import Icon from "@mdi/react";
// @material-ui/core components
//import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import "../comp/style/caro.css";

import image1 from "../comp/images/landing-bg.jpg";
import image2 from "../comp/images/profile-bg.jpg";
import image3 from "../comp/images/sign.jpg";
import { mdiAmbulance } from "@mdi/js";

class SectionCarousel extends React.Component {
  render() {
    const { classes } = this.props;
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      adaptiveHeight: true,
      pauseOnHover: true,
      variableWidth: true
    };
    return (
      <div>
        <div>
          <Carousel {...settings}>
            <div>
              <img src={image1} alt="First slide" className="slick-image" />
              <div className="slick-caption">
                <h4 style={{ textAlign: "center" }}>
                  <Icon
                    path={mdiAmbulance}
                    size={1}
                    horizontal
                    vertical
                    rotate={180}
                    color="white"
                    className="slick-icons"
                  />
                  24 Hour Medical Facility
                </h4>
              </div>
            </div>
            <div>
              <img src={image2} alt="Second slide" className="slick-image" />
              <div className="slick-caption">
                <h4 style={{ textAlign: "center" }}>
                  <Icon
                    path={mdiAmbulance}
                    size={1}
                    horizontal
                    vertical
                    rotate={180}
                    color="white"
                    className="slick-icons"
                  />
                  24 Hour Medical Facility
                </h4>
              </div>
            </div>
            <div>
              <img src={image3} alt="Third slide" className="slick-image" />
              <div className="slick-caption">
                <h4 style={{ textAlign: "center" }}>
                  <Icon
                    path={mdiAmbulance}
                    size={1}
                    horizontal
                    vertical
                    rotate={180}
                    color="white"
                    className="slick-icons"
                  />
                  24 Hour Medical Facility
                </h4>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    );
  }
}

export default SectionCarousel;
