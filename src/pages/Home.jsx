import Menu from "../components/Menu.jsx";
import Footer from "../components/Footer.jsx";
import dsmbImage from "../assets/dsmb.JPG";
import mypmosbuddy from "../assets/mypmosbuddy.png";
import mynotetaking from "../assets/my note app.png";
import styles from "../styles/Home.module.css";

function Home() {
  return (
    <div style={{ margin: "100px" }}>
      <Menu />
      <section className={styles.introContainer}>
        <img
          src={dsmbImage}
          alt="Profile picture"
          className={styles.profilePicture}
        />
        <p className={styles.introStatement}>
          Hi, I am Sam, a full-stack software developer from Victoria, BC. I
          have a background in healthcare and my focus is building scalable
          programs that help solve real-world problems. I am incredibly
          passionate about blending the world of health care and programming to
          produce solutions to everyday health care problems.
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
        </article>
      </section>

      <Footer/>
    </div>
  );
}

export default Home;
