import "./Contact.css";

import Contactinfo from "./Contactinfo.jsx";
import Contactform from "./Contactform.jsx";
import Sociallinks from "./SocialLinks.jsx";

function Contact() {
  return (
    <section className="contact-section" id="contact">

      {/* Background Glow */}

      <div className="contact-glow glow-1"></div>
      <div className="contact-glow glow-2"></div>

      {/* Main Content */}

      <div className="contact-container">

        <div className="left-side">
          <ContactInfo />
        </div>

        <div className="right-side">
          <ContactForm />
        </div>

      </div>

      {/* Footer */}

      <SocialLinks />

    </section>
  );
}

export default Contact;