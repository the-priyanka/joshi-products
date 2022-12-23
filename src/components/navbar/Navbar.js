import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context/context";
import { links } from "../../data";
import logo from "../../img/logo.png";
import DrawerNav from "./DrawerNav";
import { useMediaQuery, useTheme } from "@mui/material";

const Navbar = () => {
  const { activeNav, handleLinks } = useGlobalContext();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <div className="ui secondary pointing menu">
        <div className="left menu">
          <Link className="ui item">
            <img className="ui image nav-logo" src={logo} alt="" />
          </Link>
        </div>
        {isMatch ? (
          <DrawerNav />
        ) : (
          <div className="ui start aligned basis navContent">
            <div
              className="contact-head-details"
              style={{ textAlign: "end", marginRight: "14px" }}
            >
              <h3 className="ui header">
                <span className="primary">For Trade Enquiry :</span>
                09669000006, 08959595939
              </h3>
            </div>
            <div className="right menu">
              {links.map((link) => {
                const { id, url, text } = link;
                return (
                  <Link
                    key={id}
                    to={url}
                    onClick={() => handleLinks(url)}
                    className={
                      activeNav === `${url}` ? "item active" : "item"
                    }
                  >
                    {text}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
