import React from "react";
import { useForm } from "@formspree/react";
import MainLayout from '../Layout/MainLayout';

export function ContactUs() {
  const [state, handleSubmit] = useForm("meoeeqbe");

  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  function MainLayout() {
    return (
        <MainLayout>
        <div>Contact Us</div>
        </MainLayout>
    )
  }
  return (
    <form className="fs-form" onSubmit={handleSubmit}>
      <div className="fs-field">
        <label className="fs-label" htmlFor="firstname">
          First Name
        </label>
        <input className="fs-input" id="name" name="name" required />
      </div>
      <div className="fs-field"> 
        <label className="fs-label" htmlFor="lastname">
          Last Name
        </label>
        <input className="fs-input" id="name" name="name" required />
      </div>
      <div className="fs-field">
        <label className="fs-label" htmlFor="email">
          Email
        </label>
        <input className="fs-input" id="email" name="email" required />
      </div>
      <div className="fs-field">
        <label className="fs-label" htmlFor="message">
          Message
        </label>
        <textarea className="fs-textarea" id="message" name="message" required />
        <p className="fs-description">
          We usually respond within 1-2 business days.
        </p>
      </div>
      <div class="fs-button-group">
        <button className="fs-button" type="submit">
          Send
        </button>
      </div>
    </form>
  );
}

export default ContactUs;