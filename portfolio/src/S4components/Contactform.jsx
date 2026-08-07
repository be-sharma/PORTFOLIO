import "./Contactform.css";
import { FaPaperPlane, FaArrowRight } from "react-icons/fa6";

function ContactForm() {
  return (
    <div className="contact-form-container">

      {/* Heading */}

      <div className="form-header">

        <div className="form-icon">
          <FaPaperPlane />
        </div>

        <div>
          <h2>Send a Message</h2>
          <p>Fill out the form and I'll get back to you soon.</p>
        </div>

      </div>

      {/* Form */}

      <form className="contact-form">

        {/* Name & Email */}

        <div className="input-row">

          <div className="input-group">
            <label>
              Your Name <span>*</span>
            </label>

            <input
              type="text"
              placeholder="Enter your name"
            />
          </div>

          <div className="input-group">
            <label>
              Your Email <span>*</span>
            </label>

            <input
              type="email"
              placeholder="Enter your email"
            />
          </div>

        </div>

        {/* Subject */}

        <div className="input-group">

          <label>
            Subject <span>*</span>
          </label>

          <input
            type="text"
            placeholder="Enter subject"
          />

        </div>

        {/* Message */}

        <div className="input-group">

          <label>
            Your Message <span>*</span>
          </label>

          <textarea
            rows="7"
            placeholder="Write your message here..."
          ></textarea>

        </div>

        {/* Button */}

        <button className="send-btn">

          Send Message

          <FaArrowRight />

        </button>

      </form>

    </div>
  );
}

export default ContactForm;