import React from "react";
// import milk from "../../img/milk.webp";
// import ghee from "../../img/ghee.jpg";
// import aamkhand from "../../img/aamkhand.jpg";
// import khushbooLassi from "../../img/khushboo-lassi.png";
// import mutta from "../../img/mutta.jpg";
// import paneer from "../../img/paneer.jpg";
// import shrekhand from "../../img/shrekhand.jpg";
import homeContact from "../../img/home-background.png";
import contactGIF from "../../img/843ba4_bd3021bc6649414fa9451b5029146550_mv2.gif";
import { Button } from "@mui/material";

const Home = () => {
  return (
    <>
      {/* <div
        id="carouselExampleIndicators"
        className="carousel slide home-carousel"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="1"
          ></li>
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="2"
          ></li>
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="3"
          ></li>
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="4"
          ></li>
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="5"
          ></li>
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="6"
          ></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="carousel-img d-block w-90"
              src={milk}
              alt="First slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="carousel-img d-block w-90"
              src={ghee}
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="carousel-img d-block w-90"
              src={aamkhand}
              alt="Third slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="carousel-img d-block w-90"
              src={khushbooLassi}
              alt="Third slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="carousel-img d-block w-90"
              src={mutta}
              alt="Third slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="carousel-img d-block w-90"
              src={paneer}
              alt="Third slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="carousel-img d-block w-90"
              src={shrekhand}
              alt="Third slide"
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div> */}

      <div className="home-container">
        <h1 className="ui">
          Welcome To Our <span> Joshi Doodh Dahee Bhandaar!</span>
        </h1>
      </div>

      <div className="ui raised very padded text segment home-content-container">
        <div className="home-content">
          <h1 className="ui primary">
            Welcome to Joshi's Dairy Products!
          </h1>
          <p>
            Joshi's Dairy Product, Indore's fast growing dairy.
            Joshi's Dairy Product is one of the Indore's reputed
            manufactures and wholesellers of milk and milk Products
            like dahi, paneer, butter, ghee, chakka, Lassi, Spiced
            Butter Milk(Maththa), Shrikhand, Aamkhand(Mango Shrikhand)
            etc. We supply our products under the brand name of
            "Khuhboo Lassi" and the Firm "Joshi Dudh Dahi Bhandar".
            Joshi's Dairy Product is an efficient and reliable
            supplier to Families, reputed hotels, restaurants,
            institutions and caterers. We have also expanded our
            retail presence significantly
          </p>
          <Button
            variant="contained"
            style={{
              fontWeight: "bold",
              fontSize: "1rem",
              color: "white",
            }}
          >
            More Info!
          </Button>
        </div>
        <div className="ui large image">
          <img src={homeContact} />
        </div>
      </div>

      <div className="ui raised very padded text segment home-content-container">
        <div className="column">
          <div className="row marginBottom">
            <h3 className="primaryTextColor">Address: </h3>
            <span>
              104, Sanvid Nagar, Near Hanuman Mandir, Kanadiya Road,
              Indore-452001
            </span>
          </div>
          <div className="row marginBottom">
            <h3 className="primaryTextColor">Contact: </h3>
            <p>+91-9669000006, +91-8959595939, +91-9826084631</p>
          </div>
          <div className="row">
            <h3 className="primaryTextColor">Email: </h3>
            <p>info@joshidairyproducts.com</p>
          </div>
        </div>
        <div className="column">
          <div className="ui large image">
            <img src={contactGIF} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
