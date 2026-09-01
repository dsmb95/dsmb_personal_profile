import Menu from "../components/Menu.jsx";
import Footer from "../components/Footer.jsx";
import styles from "../styles/About.module.css";
import { useState } from "react";
import codingImg from "../assets/coding.png";
import databaseImg from "../assets/database.png";
import testImg from "../assets/testing.png";
import knowledgeImg from "../assets/engineering.png";

const skills = [
  {
    img: codingImg,
    title: "Programming Languages",
    description: "JavaScript, Python, TypeScript, HTML5, CSS3, ES6",
  },
  {
    img: databaseImg,
    title: "Database Administration",
    description: "MongoDB, MySQL, CRUD Operations",
  },
  {
    img: testImg,
    title: "Test Automation",
    description: "Mocha and Chai Testing",
  },
  {
    img: knowledgeImg,
    title: "Systems Analysis & Technical Knowledge",
    description:
      "Full Software Development Lifecycle (SDLC), Agile Methodologies, MVC Architecture, RESTful API Design, Object Oriented Programming (OOP)",
  },
];

function About() {
  const [currentSkill, setCurrentSkill] = useState(0);

  const showPreviousSkill = () => {
    setCurrentSkill((prev) =>
      prev === 0 ? skills.length - 1 : prev - 1,
    );
  };

  const showNextSkill = () => {
    setCurrentSkill((prev) => (prev + 1) % skills.length);
  };

  return (
    <>
      <div style={{ margin: "100px" }}>
        <Menu />
        <article>
          <section style={{ margin: "auto", marginBottom: "70zpx" }}>
            <h1 className={styles.header}>Skills</h1>
            <div className={styles.skillsCarousel}>
              <button
                type="button"
                className={styles.carouselButton}
                onClick={showPreviousSkill}
                aria-label="Show previous skill"
              >
                ‹
              </button>

              <div key={currentSkill} className={styles.skillsCard}>
                <img src={skills[currentSkill].img} className={styles.skillsImg}/>
                <p className={styles.content}>
                  <strong className={styles.skillTitle}>
                    {skills[currentSkill].title}
                  </strong>
                </p>
                <p className={styles.content}>
                  <em>{skills[currentSkill].description}</em>
                </p>
              </div>

              <button
                type="button"
                className={styles.carouselButton}
                onClick={showNextSkill}
                aria-label="Show next skill"
              >
                ›
              </button>
            </div>
          </section>
          <section style={{ margin: "auto" }}>
            <h1 className={styles.header}>Education & Background</h1>
            <p className={styles.content}>
              Software Development Bootcamp, Circuit Stream, <em>(Online)</em>{" "}
              <br />
              Sep 2025 - June 2026
            </p>
            <p className={styles.content}>
              Certificate in Business Administration, University of Victoria,{" "}
              <em>(Victoria, BC)</em> <br />
              Sep 2023 - June 2024
            </p>
            <p className={styles.content}>
              Bachelor of Science in Nursing, University of Santo Tomas,{" "}
              <em>(Manila, Philippines)</em> <br />
              Jun 2011 - May 2015
            </p>
          </section>
        </article>
        <Footer />
      </div>
    </>
  );
}

export default About;
