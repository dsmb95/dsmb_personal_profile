import Menu from "../components/Menu.jsx";
import Footer from "../components/Footer.jsx";
import styles from "../styles/Home.module.css";
import profilePicture from "../assets/dsmb.JPG";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className={styles.homePage}>
      <Menu />

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.heroGreeting}>Hi, I&apos;m Sam.</p>
          <h1>Building thoughtful solutions through code and healthcare.</h1>
          <p className={styles.heroStatement}>
            I&apos;m a full-stack developer from Victoria, BC, passionate about
            creating practical, user-focused applications.
          </p>
          <div className={styles.heroButtons}>
            <Link to="/projects">View my projects</Link>
            <Link to="/contact">Get in touch</Link>
          </div>
        </div>
        <img
          src={profilePicture}
          alt="Sam"
          className={styles.heroImage}
        />
      </section>

      {/* <section className={styles.projectsContainer}>
        <h2 className={styles.projectsHeader}>Projects</h2>
        <article className={styles.projectsImgContainer}>
          <a
            href="https://my-pmos-buddy-frontend.onrender.com"
            className={styles.projectsAnchor}
            target="_blank"
          >
            <img src={mypmosbuddy} className={styles.projectsImg} />
          </a>

          <a
            href="https://my-note-taking-app.onrender.com"
            className={styles.projectsAnchor}
            target="_blank"
          >
            <img src={mynotetaking} className={styles.projectsImg} />
          </a>

          <a
            href="https://my-weather-app-90df.onrender.com/"
            className={styles.projectsAnchor}
            target="_blank"
          >
            <img src={myweather} className={styles.projectsImg} />
          </a>
        </article>
      </section> */}

      <Footer />
    </div>
  );
}

export default Home;
