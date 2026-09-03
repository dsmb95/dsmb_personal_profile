import { useState } from "react";
import emailjs from "@emailjs/browser";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import Menu from "../components/menu.jsx";
import Footer from "../components/Footer.jsx";
import styles from "../styles/Contact.module.css";
import emailIcon from "../assets/email.png";
import gitIcon from "../assets/github.png";
import linkedIcon from "../assets/linkedin.png";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name,
          email,
          message
        },
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        },
      );

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <>
      <div className={styles.page}>
        <Menu />

        <article>
          <section>
            <div className={styles.sectionContainer}>
              <h2>
                If you want to connect for collaborations or work opportunities,
                you can contact me through:
              </h2>
              <div className={styles.contactContainer}>
                <a href="mailto:daniellesamanthamananquil@gmail.com" className={styles.contactContent}>
                  <img src={emailIcon} className={styles.contactImg} />
                  <p>daniellesamanthamananquil@gmail.com</p>
                </a>
                <a href="https://github.com/dsmb95" className={styles.contactContent}>
                  <img src={gitIcon} className={styles.contactImg} />
                  <p>https://github.com/dsmb95</p>
                </a>
                <a href="https://www.linkedin.com/in/dsmananquil/" className={styles.contactContent}>
                  <img src={linkedIcon} className={styles.contactImg} />
                  <p>www.linkedin.com/in/dsmananquil</p>
                </a>
              </div>
            </div>
          </section>

          <section className={styles.formSection}>
            <h2>Send me a message</h2>
            <p className={styles.formIntro}>
              Have a question or want to work together? Fill out the form and
              I&apos;ll get back to you as soon as possible.
            </p>
            {status && (
              <Alert severity={status === "success" ? "success" : "error"}>
                {status === "success"
                  ? "Your message was sent successfully!"
                  : "Something went wrong. Please try again."}
              </Alert>
            )}
            <form className={styles.formField} onSubmit={handleSubmit}>
              <TextField
                required
                fullWidth
                id="name"
                name="name"
                label="Name"
                value={name}
                onChange={({ target }) => setName(target.value)}
              />
              <TextField
                required
                fullWidth
                type="email"
                id="email"
                name="email"
                label="Email"
                value={email}
                onChange={({ target }) => setEmail(target.value)}
              />
              <TextField
                required
                fullWidth
                multiline
                minRows={5}
                id="message"
                name="message"
                label="Message"
                value={message}
                onChange={({ target }) => setMessage(target.value)}
              />
              <Button
                type="submit"
                variant="contained"
                size="large"
                className={styles.submitButton}
              >
                Send message
              </Button>
            </form>
          </section>
        </article>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
