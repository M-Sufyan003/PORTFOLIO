import React, { useState } from "react";
import styles from "./Contact.module.css";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {

  const [form, setForm] = useState({ username: "", email: "", message: "" });
  const [state, formspreeSubmit] = useForm("xeerojvz");

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();

    await formspreeSubmit(form);

    if (!state.errors && state.succeeded) {
      setForm({ username: "", email: "", message: "" });
    }
  };

  return (
    <section className={`${styles.contact} section`} id="contact">
      <h2 className="section-title">Contact</h2>

      <div className={`${styles.contactContainer} bd-grid`}>
        <form className={styles.contactForm} onSubmit={handleSubmit}>

          <input
            type="text"
            name="username"
            placeholder="Name"
            className={styles.contactInput}
            value={form.username}
            onChange={handleChange}
            required
            autoComplete="off"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            className={styles.contactInput}
            value={form.email}
            onChange={handleChange}
            required
            autoComplete="off"
          />

          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
          />

          <textarea
            name="message"
            rows={10}
            className={styles.contactInput}
            placeholder="Type Brief Description Of the Message Here......"
            value={form.message}
            onChange={handleChange}
            required
            autoComplete="off"
            minLength={10}
          />

          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />

          <button
            type="submit"
            className={`${styles.contactButton} button`}
            disabled={state.submitting}
          >
            {state.submitting ? "Sending..." : "Send Message"}
          </button>

          {state.succeeded && (
            <p className={styles.successMsg}> Message sent successfully!</p>
          )}

        </form>
      </div>
    </section>
  );
};

export default Contact;