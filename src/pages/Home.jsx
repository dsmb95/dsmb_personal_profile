import Menu from "../components/Menu.jsx";
import Footer from "../components/Footer.jsx";
import mypmosbuddy from "../assets/mypmosbuddy.png";
import mynotetaking from "../assets/my note app.png";
import styles from "../styles/Home.module.css";
import myweather from "../assets/My Weather App.png";

function Home() {
  return (
    <div style={{ margin: "100px" }}>
      <Menu />
      <section className={styles.introContainer}>
        <p className={styles.introStatement}>
          Hi, I am Sam, a full-stack software developer from Victoria, BC.
          Welcome to my web page, feel free to look through my projects and
          connect for employment or partnerships!
        </p>
      </section>

      <section className={styles.projectsContainer}>
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
      </section>

      <Footer />
    </div>
  );
}

export default Home;