import styles from "../styles/Footer.module.css";
import emailIcon from "../assets/email.png";
import gitIcon from "../assets/github.png";
import linkedIcon from "../assets/linkedin.png";

function Footer() {
  return (
    <>
      <footer className={styles.container}>
        <address>
          <a href="mailto:daniellesamanthamananquil@gmail.com" target="_blank">
            <img src={emailIcon} className={styles.footerIcon} />
          </a>
          <a href="https://github.com/dsmb95" target="_blank">
            <img src={gitIcon} className={styles.footerIcon} />
          </a>
          <a href="https://www.linkedin.com/in/dsmananquil/" target="_blank">
            <img src={linkedIcon} className={styles.footerIcon} />
          </a>
        </address>
        <p>&copy; 2026 Danielle Samantha Mananquil</p>
      </footer>
    </>
  );
}

export default Footer;
