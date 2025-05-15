import React from "react";
import FooterContact from "../../api/footerApi.json";
import { MdPlace } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { TbMailPlus } from "react-icons/tb";

const Footer = () => {
  const footerIcon = {
    MdPlace: <MdPlace />,
    IoCallSharp: <IoCallSharp />,
    TbMailPlus: <TbMailPlus />,
  };
  return (
    <footer className="footer_section">
      <div className="container">
        <div className="row">
          {FooterContact.map((contact, index) => {
            const { icon, title, details } = contact;
            return (
              <div className="col-md-4">
                  <div key={index} className="footer_content">
                    <i>{footerIcon[icon]}</i>
                    <div className="contact_details">
                      <span>{title}</span>
                      <p>{details}</p>
                    </div>
                  </div>
              </div>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
