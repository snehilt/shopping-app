import React from "react";
import "../App.css";
import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer">
      <p>Shopping App 2023&copy; </p>
      <span>
        <BsInstagram className="footer-icons" /> &nbsp;
        <BsFacebook className="footer-icons" /> &nbsp;
        <BsTwitter className="footer-icons" /> &nbsp;
      </span>
    </div>
  );
};

export default Footer;
