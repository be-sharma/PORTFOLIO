import "./Contact.css";

import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import SocialLinks from "./SocialLinks";

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