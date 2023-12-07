import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="item">
        <img
          className="footer-icon"
          src="https://templates.iqonic.design/streamit/intro/assets/images/footer/author.svg"
          alt="author"
        />
        <span className="footer-txt">Elite Author</span>
      </div>
      <div className="item">
        <img
          className="footer-icon"
          src="https://templates.iqonic.design/streamit/intro/assets/images/footer/quality.svg"
          alt="Quality"
        />
        <span className="footer-txt">Superior Quality</span>
      </div>
      <div className="item">
        <img
          className="footer-icon"
          src="https://templates.iqonic.design/streamit/intro/assets/images/footer/suport.svg"
          alt="Rating"
        />
        <span className="footer-txt">5 Star Support</span>
      </div>
      <div className="item">
        <img
          className="footer-icon"
          src="https://templates.iqonic.design/streamit/intro/assets/images/footer/update.svg"
          alt="Updates"
        />
        <span className="footer-txt">Lifetime Updates</span>
      </div>
    </div>
  );
};

export default Footer;
