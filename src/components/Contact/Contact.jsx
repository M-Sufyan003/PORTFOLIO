import React, { useState } from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  const [form, setForm] = useState({ username: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/xldrgnag", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ username: "", email: "", message: "" });
        setTimeout(() => setStatus(null), 4000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
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

          <button
            type="submit"
            className={`${styles.contactButton} button`}
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className={styles.successMsg}>✅ Message sent successfully!</p>
          )}
          {status === "error" && (
            <p className={styles.errorMsg}>❌ Something went wrong. Please try again.</p>
          )}

        </form>
      </div>
    </section>
  );
};

export default Contact;
