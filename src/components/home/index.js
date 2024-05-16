import React from "react";
import "./home.css";
import homeAboutImg from "../../img/home-background.png";
import contactGIF from "../../img/contact.gif";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";

import { useGlobalContext } from "../../context/context";

const Home = () => {
  const { activeNav, handleLinks } = useGlobalContext();
  let theme = createTheme();
  theme = responsiveFontSizes(theme);
  return (
    <>
      <div className="home-container">
        <ThemeProvider theme={theme}>
          <Typography className="h2class" variant="h2">
            Welcome To Our <span> Joshi Doodh Dahee Bhandaar!</span>
          </Typography>
        </ThemeProvider>
      </div>

      <div className="ui raised very padded text segment home-content-container">
        <div className="home-content">
          <ThemeProvider theme={theme}>
            <Typography className="h2class" variant="h2">
              Welcome to Joshi's Dairy Products!
            </Typography>
            <Typography variant="subtitle1">
              Joshi's Dairy Product, Indore's fast growing dairy.
              Joshi's Dairy Product is one of the Indore's reputed
              manufactures and wholesellers of milk and milk Products
              like dahi, paneer, butter, ghee, chakka, Lassi, Spiced
              Butter Milk(Maththa), Shrikhand, Aamkhand(Mango
              Shrikhand) etc. We supply our products under the brand
              name of "Khuhboo Lassi" and the Firm "Joshi Dudh Dahi
              Bhandar". Joshi's Dairy Product is an efficient and
              reliable supplier to Families, reputed hotels,
              restaurants, institutions and caterers. We have also
              expanded our retail presence significantly
            </Typography>
          </ThemeProvider>
          <Button variant="contained">
            <Link
              style={{
                fontWeight: "bold",
                fontSize: "1rem",
                color: "white",
                textDecoration: "none",
              }}
              to="/about"
              onClick={() => handleLinks("/about")}
              className={
                activeNav === "/about" ? "item active" : "item"
              }
            >
              More Info!
            </Link>
          </Button>
        </div>
        <div className="ui large image" size>
          <img src={homeAboutImg} />
        </div>
      </div>

      <div className="ui raised very padded text segment home-content-container">
        <div className="column">
          <ThemeProvider theme={theme}>
            <div className="row marginBottom">
              <Typography variant="h4" className="primaryTextColor">
                Address:
              </Typography>
              <Typography variant="h6">
                104, Sanvid Nagar, Near Hanuman Mandir, Kanadiya Road,
                Indore-452001
              </Typography>
            </div>
            <div className="row marginBottom">
              <Typography variant="h4" className="primaryTextColor">
                Contact:
              </Typography>
              <Typography variant="h6">
                +91-9669000006, +91-8959595939, +91-9826084631
              </Typography>
            </div>
            <div className="row">
              <Typography variant="h4" className="primaryTextColor">
                Email:
              </Typography>
              <Typography variant="h6">
                info@joshidairyproducts.com
              </Typography>
            </div>
          </ThemeProvider>
        </div>
        <div className="column">
          <div className="ui large image" size>
            <img src={contactGIF} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
