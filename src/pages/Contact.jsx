import React from "react";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  const handleFormSubmit = (formData)=>{
    const formInputData = Object.fromEntries(formData.entries());
  console.log(formInputData);
  
  }
  return (
    <>
      <div className="contact_section">
        <div className="container">
          <div className="Heading">
            <h1 className="text-center">Contact us</h1>
          </div>
          <form action={handleFormSubmit} className="input_field">
            <div className="input_box">
              <input
                type="text"
                required
                autoComplete="off"
                placeholder="Enter Your Name"
                name="userName"
              />
              <i>
                <FaUser />
              </i>
            </div>
            <div className="input_box">
              <input
                type="email"
                required
                autoComplete="off"
                placeholder="Enter Your Email"
                name="userEmail"
              />
              <i>
                <MdEmail />
              </i>
            </div>
            <textarea
              required
              autoComplete="off"
              name="message"
              placeholder="Type a message"
            />
            <button type="submit" value="send" className="form_btn">
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
