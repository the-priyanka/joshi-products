import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context/context";
import { links } from "../../data";
import logo from "../../img/logo.png";
import logo2 from "../../img/logo (1).png";
import DrawerNav from "./DrawerNav";
import { useMediaQuery, useTheme } from "@mui/material";

const Navbar = () => {
  const { activeNav, handleLinks, navbar } = useGlobalContext();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <div
        className={
          navbar
            ? "ui secondary pointing menu fixed navbarContainer activeNav"
            : "ui secondary pointing menu fixed navbarContainer"
        }
      >
        <div className="left menu">
          <Link className="ui item">
            <img
              className="ui image nav-logo"
              src={navbar ? logo : logo2}
              alt=""
            />
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
              <h3
                className={
                  navbar
                    ? "ui header navContact itemActive"
                    : "ui header navContact"
                }
              >
                <span className="primary primaryTextColor">
                  For Trade Enquiry :{" "}
                </span>{" "}
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
                      navbar
                        ? activeNav === `${url}`
                          ? "item active"
                          : "item itemActive"
                        : activeNav === `${url}`
                        ? "item active"
                        : "item"
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
