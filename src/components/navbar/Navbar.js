import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context/context";
import { links } from "../../data";
import logo from "../../img/logo.png";

const Navbar = () => {
  const { activeNav, handleLinks } = useGlobalContext();
  return (
    <>
      <div className="ui secondary pointing menu">
        <div className="left menu">
          <Link className="ui item">
            <img className="ui image" src={logo} alt="" />
          </Link>
        </div>
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
      </div>
    </>
  );
};

export default Navbar;
