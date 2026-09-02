import Menu from "../components/Menu.jsx";
import Footer from "../components/Footer.jsx";
import styles from "../styles/Projects.module.css";
import mypmosbuddy from "../assets/mypmosbuddy.png";
import mynotetaking from "../assets/my note app.png";
import myweather from "../assets/My Weather App.png";

function Projects() {
  return (
    <>
      <div style={{ margin: "100px" }}>
        <Menu />
        <article>
          <section className={styles.mainContainer}>
            <h1 className={styles.title}>My PMOS Buddy</h1>
            <div className={styles.contentContainer}>
              <a href="https://my-pmos-buddy-frontend.onrender.com">
                <img src={mypmosbuddy} className={styles.projectImg} />
              </a>
              <p className={styles.content}>
                This web application was created to help women track their
                patterns which allows them to monitor personal health patterns,
                symptoms, and treatments. It is built with React.js and offers
                secure user authenticaltion via Passport.js. Third party cycle
                prediction APIs and libraries (react-calendar) are also
                implemented for interactive forecasting visualizations.
                Engineered dynamic multi-metric logging tools, featuring photo
                uploads for skin health notes, weight trend vidualization
                graphs, and a dedicated flow and medication management
                pages.{" "}
              </p>
            </div>
          </section>

          <section className={styles.mainContainer}>
            <h1 className={styles.title}>My Note App</h1>
            <div className={styles.contentContainer}>
              <a href="https://my-note-taking-app.onrender.com">
                <img src={mynotetaking} className={styles.projectImg} />
              </a>
              <p className={styles.content}>
                A web application that is built using the MVC pattern. Utilizes
                Node.js, Express.js, and MongoDB to build the back-end. With a
                growth mindset, learned and incorporated security protocols with
                Passport.js and Bycrypt. For front end development, EJS was
                utilized for compliance with user privacy standards.
              </p>
            </div>
          </section>

          <section className={styles.mainContainer}>
            <h1 className={styles.title}>My Weather App</h1>
            <div className={styles.contentContainer}>
              <a href="https://my-note-taking-app.onrender.com">
                <img src={myweather} className={styles.projectImg} />
              </a>
              <p className={styles.content}>
                A dynamic web page that displays the current weather. Utilizes
                React as a front end framework where comprehensive technical
                documentation was maintained and followed strict design
                standards for component reusability. Rigorous debugging and root
                cause analysis were utilized to resolve complex state management
                issues.
              </p>
            </div>
          </section>
        </article>
      </div>
      <Footer />
    </>
  );
}

export default Projects;
