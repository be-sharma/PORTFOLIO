import "./Contactinfo.css";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaRegClock,
} from "react-icons/fa";

function ContactInfo() {
  return (
    <div className="contact-info">

      {/* Section Number */}

      <div className="contact-top">

        <div className="line"></div>


        <div className="line"></div>

      </div>

      {/* Small Heading */}

      <h4 className="contact-subtitle">GET IN TOUCH</h4>

      {/* Main Heading */}

      <h1 className="contact-title">
        Let's Work
        <br />
        <span>Together.</span>
      </h1>

      {/* Description */}

      <p className="contact-description">
        Have a project in mind or just want to say hi?
        <br />
        Feel free to reach out. I'd love to hear from you!
      </p>

      <div className="heading-line"></div>

      {/* Contact Details */}

      <div className="contact-details">

        {/* Email */}

        <div className="contact-item">

          <div className="contact-icon">
            <FaEnvelope />
          </div>

          <div className="contact-text">
            <span>EMAIL</span>
            <h3>sujals069@email.com</h3>
          </div>

        </div>

        {/* Phone */}

        <div className="contact-item">

          <div className="contact-icon">
            <FaPhoneAlt />
          </div>

          <div className="contact-text">
            <span>PHONE</span>
            <h3>+91 6388917812</h3>
          </div>

        </div>

        {/* Location */}

        <div className="contact-item">

          <div className="contact-icon">
            <FaMapMarkerAlt />
          </div>

          <div className="contact-text">
            <span>LOCATION</span>
            <h3>Prayagraj, India</h3>
          </div>

        </div>

        {/* Availability */}

        <div className="contact-item">

          <div className="contact-icon">
            <FaRegClock />
          </div>

          <div className="contact-text">
            <span>AVAILABILITY</span>
            <h3>Open for Opportunities</h3>
          </div>

        </div>

      </div>

    </div>
  );
}

export default ContactInfo;