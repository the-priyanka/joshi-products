import React from "react";
import "./about.css";
import { Typography } from "@mui/material";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import MainHead from "../MainHead";

const About = () => {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  return (
    <>
      <MainHead
        classNames="about-container"
        title="OUR JOURNEY"
        shortTitle="since 1978"
      />

      <div className="ui raised very padded text segment aboutTextContainer">
        <ThemeProvider theme={theme}>
          <Typography variant="subtitle1">
            Joshi Dudh Dahi Bhandar was founded by the Shri
            Radhakishan Ji Joshi. A journey that began in 1978, in the
            district Indore, Mahdya Pradesh set the stage for a
            revolution in the dairy industry. In the Guidance and the
            Management of CMD Shri Rajesh Ji Joshi, The Vision of Our
            Organisation, which we have carefully nurtured over the
            years, is based on a Core Ideology of Value, Ethics,
            Quality of Products, Satisfaction and Health of Our
            Customers, Caring of our Nature, Our Employees and
            becoming a responsible and responsive Corporate Citizen of
            this Great Country.
          </Typography>
          <br />
          <Typography variant="subtitle1">
            In Year 2011 with the increased in demand of the Society
            We Stepped in the Industry of Packed Milk Products with
            the Brand Name “Khushboo”. We Started the Supply of Packed
            Milk Product, “Khushboo Lassi”, “Khushboo Spiced Butter
            Milk”, “Khushboo Shrikhand”, “Khushboo Aamkhand”,
            “Khushboo Rabdi”, “Khushboo Panjabi Lassi” are the Common
            well Known Product in the States of Madhya Pradesh,
            Rajesthan, Gujrat.
          </Typography>
          <br />
          <Typography variant="subtitle1">
            Joshi Dudh Dahi Bhandar is an Indian dairy that’s
            committed and dedicated to supply the purest form of Milk
            and the Milk Products in the most Ethical and Responsible
            manner. We are one of the few Dairies in India to adopt a
            Farmer-Friendly Business model wherein the credit and
            profit of the Milk that you Consume, is given to the
            Farmers of India. We take Immense Pride and Pleasure to
            follow this model, as you Receive Milk from the Freshest
            Source, and Simultaneously the Financial strength of the
            Farmer improves as new avenues of Livelihood are being
            Opened Up.
          </Typography>
        </ThemeProvider>
      </div>
      {/* <Container maxWidth="md">
        Joshi Dudh Dahi Bhandar was founded by the Shri Radhakishan Ji
        Joshi. A journey that began in 1978, in the district Indore,
        Mahdya Pradesh set the stage for a revolution in the dairy
        industry. In the Guidance and the Management of CMD Shri
        Rajesh Ji Joshi, The Vision of Our Organisation, which we have
        carefully nurtured over the years, is based on a Core Ideology
        of Value, Ethics, Quality of Products, Satisfaction and Health
        of Our Customers, Caring of our Nature, Our Employees and
        becoming a responsible and responsive Corporate Citizen of
        this Great Country. In Year 2011 with the increased in demand
        of the Society We Stepped in the Industry of Packed Milk
        Products with the Brand Name “Khushboo”. We Started the Supply
        of Packed Milk Product, “Khushboo Lassi”, “Khushboo Spiced
        Butter Milk”, “Khushboo Shrikhand”, “Khushboo Aamkhand”,
        “Khushboo Rabdi”, “Khushboo Panjabi Lassi” are the Common well
        Known Product in the States of Madhya Pradesh, Rajesthan,
        Gujrat. Joshi Dudh Dahi Bhandar is an Indian dairy that’s
        committed and dedicated to supply the purest form of Milk and
        the Milk Products in the most Ethical and Responsible manner.
        We are one of the few Dairies in India to adopt a
        Farmer-Friendly Business model wherein the credit and profit
        of the Milk that you Consume, is given to the Farmers of
        India. We take Immense Pride and Pleasure to follow this
        model, as you Receive Milk from the Freshest Source, and
        Simultaneously the Financial strength of the Farmer improves
        as new avenues of Livelihood are being Opened Up.
      </Container> */}
    </>
  );
};

export default About;
