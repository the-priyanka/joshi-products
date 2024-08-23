import React from "react";
import "./contact.css";
import MainHead from "../MainHeadComp";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import { Typography } from "@mui/material";

const Contact = () => {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);
  return (
    <>
      <MainHead
        classNames="contactContainer"
        title="OUR CONTACT US"
      />

      <div className="ui raised very padded text segment contactContent">
        <div className="ui raised very segment contact-map">
          <ThemeProvider theme={theme}>
            <Typography variant="h3" className="contactHeading">
              Joshi Dudh Dahi Bhandar
            </Typography>
          </ThemeProvider>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58870.89709256663!2d75.84694800515113!3d22.749378483480385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd349bc9d795%3A0x3fc302881a2909b3!2sJoshi%20dudh%20dhai%20bhandar!5e0!3m2!1sen!2sin!4v1672208368081!5m2!1sen!2sin"
            style={{
              width: " -webkit-fill-available",
              height: " -webkit-fill-available",
            }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <ThemeProvider theme={theme}>
            <div className="column">
              <ThemeProvider theme={theme}>
                <div className="row marginBottom">
                  <Typography variant="h5">Contact:</Typography>
                  <Typography variant="body1">
                    Mr. Rajesh Joshi
                  </Typography>
                </div>

                <div className="row marginBottom">
                  <Typography variant="h5">Phone:</Typography>
                  <Typography variant="body1">09669000006</Typography>
                </div>

                <div className="row marginBottom">
                  <Typography variant="h5">Address:</Typography>
                  <Typography variant="body1">
                    104, Sanvid Nagar, Near Hanuman Mandir, Kanadiya
                    Road, Indore-452001
                  </Typography>
                </div>

                <div className="row marginBottom">
                  <Typography variant="h5">Email:</Typography>
                  <Typography variant="body1">
                    sales@joshidairyproduct.com
                  </Typography>
                </div>

                <div className="row">
                  <Typography variant="h5">Follow us:</Typography>
                  <Typography variant="body1"></Typography>
                </div>
              </ThemeProvider>
            </div>
          </ThemeProvider>
        </div>
        <div className="ui raised very segment contact-map">
          <ThemeProvider theme={theme}>
            <Typography variant="h3" className="contactHeading">
              Joshi Lassi
            </Typography>
          </ThemeProvider>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58870.89709256663!2d75.84694800515113!3d22.749378483480385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd349bc9d795%3A0x3fc302881a2909b3!2sJoshi%20dudh%20dhai%20bhandar!5e0!3m2!1sen!2sin!4v1672208368081!5m2!1sen!2sin"
            style={{
              width: " -webkit-fill-available",
              height: " -webkit-fill-available",
            }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <ThemeProvider theme={theme}>
            <div className="column">
              <ThemeProvider theme={theme}>
                <div className="row marginBottom">
                  <Typography variant="h5">Contact:</Typography>
                  <Typography variant="body1">
                    Mr. Rahul Joshi
                  </Typography>
                </div>

                <div className="row marginBottom">
                  <Typography variant="h5">Phone:</Typography>
                  <Typography variant="body1">08959595939</Typography>
                </div>

                <div className="row marginBottom">
                  <Typography variant="h5">Address:</Typography>
                  <Typography variant="body1">
                    Near Bangali Squre, Kanadiya Road, Indore-452001
                  </Typography>
                </div>

                <div className="row marginBottom">
                  <Typography variant="h5">Email:</Typography>
                  <Typography variant="body1">
                    khushboolassi@yahoo.com
                  </Typography>
                </div>

                <div className="row">
                  <Typography variant="h5">Follow us:</Typography>
                  <Typography variant="body1"></Typography>
                </div>
              </ThemeProvider>
            </div>
          </ThemeProvider>
        </div>
      </div>
    </>
  );
};

export default Contact;
