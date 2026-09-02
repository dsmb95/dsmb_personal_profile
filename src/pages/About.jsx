import Menu from "../components/Menu.jsx";
import Footer from "../components/Footer.jsx";
import styles from "../styles/About.module.css";
import { useState } from "react";
import codingImg from "../assets/coding.png";
import databaseImg from "../assets/database.png";
import testImg from "../assets/testing.png";
import knowledgeImg from "../assets/engineering.png";
import educationImg from "../assets/mortarboard.png";
import workImg from "../assets/suitcase.png";
import profilePicture from "../assets/dsmb.JPG";
import mypmosbuddy from "../assets/mypmosbuddy.png";
import mynotetaking from "../assets/my note app.png";
import myweather from "../assets/My Weather App.png";

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

const credentials = [
  {
    course: "Software Development Bootcamp, Circuit Stream",
    location: "(Online)",
    date: "Sep 2025 - Jun 2026",
  },
  {
    course: "Certificate in Business Administration, University of Victoria",
    location: "(Victoria, BC)",
    date: "Sep 2023 - Jun 2024",
  },
  {
    course: "Bachelor of Science in Nursing, University of Santo Tomas",
    location: "(Manila, Philippines)",
    date: "Jun 2011 - May 2015",
  },
];

const experiences = [
  {
    company: "Roger's Chocolates",
    position: "Sales Associate",
    date: "Feb 2024 - Feb 2025",
  },
  {
    company: "Green Yard Hotel",
    position: "General Manager",
    date: "Sep 2018 - Nov 2022",
  },
];

const projects = [
  {
    title: "My PMOS Buddy",
    link: "https://my-pmos-buddy-frontend.onrender.com",
    img: mypmosbuddy,
  },
  {
    title: "My Note App",
    link: "https://my-note-taking-app.onrender.com",
    img: mynotetaking,
  },
  {
    title: "My Weather App",
    link: "https://my-weather-app-90df.onrender.com/",
    img: myweather,
  },
];

function About() {
  const [currentSkill, setCurrentSkill] = useState(0);
  const [currentCredential, setCurrentCredential] = useState(0);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [currentProject, setCurrentProject] = useState(0);

  // Carousel function for skills
  const showPreviousSkill = () => {
    setCurrentSkill((prev) => (prev === 0 ? skills.length - 1 : prev - 1));
  };

  const showNextSkill = () => {
    setCurrentSkill((prev) => (prev + 1) % skills.length);
  };

  // Carousel function for credentials
  const showPreviousCredential = () => {
    setCurrentCredential((prev) =>
      prev === 0 ? credentials.length - 1 : prev - 1,
    );
  };

  const showNextCredential = () => {
    setCurrentCredential((prev) => (prev + 1) % credentials.length);
  };

  // Carousel function for credentials
  const showPreviousExperience = () => {
    setCurrentExperience((prev) =>
      prev === 0 ? experiences.length - 1 : prev - 1,
    );
  };

  const showNextExperience = () => {
    setCurrentExperience((prev) => (prev + 1) % experiences.length);
  };

  // Carousel function for projects
  const showPreviousProject = () => {
    setCurrentProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const showNextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  return (
    <>
      <div style={{ margin: "100px" }}>
        <Menu />
        <article>
          <section className={styles.introContainer}>
            <div>
              <img src={profilePicture} className={styles.introImg} />
            </div>
            <div className={styles.introContent}>
              <h3>Hi there! I'm Sam.</h3>
              <p>
                I have a background in healthcare and my focus is building
                scalable programs that help solve real-world problems. I
                specialize in building full-stack applicaitons using the MERN
                stack (MongoDB, Express.js, React, Node.js). I am incredibly
                passionate about blending the world of health care and
                programming to produce solutions to everyday health care
                problems.
              </p>
            </div>
          </section>
        </article>

        {/* SKILLS CONTAINER */}
        <article className={styles.contentContainer}>
          <section style={{ margin: "auto", marginBottom: "70px" }}>
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
                <img
                  src={skills[currentSkill].img}
                  className={styles.skillsImg}
                />
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

          {/* CREDENTIALS CONTAINER */}
          <section style={{ margin: "auto", marginBottom: "70px" }}>
            <h1 className={styles.header}>Education & Background</h1>
            <div className={styles.skillsCarousel}>
              <button
                type="button"
                className={styles.carouselButton}
                onClick={showPreviousCredential}
                aria-label="Show previous skill"
              >
                ‹
              </button>

              <div key={currentCredential} className={styles.skillsCard}>
                <img src={educationImg} className={styles.skillsImg} />
                <p className={styles.content}>
                  <strong className={styles.skillTitle}>
                    {credentials[currentCredential].course}
                  </strong>
                </p>
                <p className={styles.content}>
                  <em>{credentials[currentCredential].location}</em>
                </p>
                <p className={styles.content}>
                  <em>{credentials[currentCredential].date}</em>
                </p>
              </div>

              <button
                type="button"
                className={styles.carouselButton}
                onClick={showNextCredential}
                aria-label="Show next skill"
              >
                ›
              </button>
            </div>
          </section>

          {/* EXPERIENCE CONTAINER */}
          <section style={{ margin: "auto", marginBottom: "70px" }}>
            <h1 className={styles.header}>Experience</h1>
            <div className={styles.skillsCarousel}>
              <button
                type="button"
                className={styles.carouselButton}
                onClick={showPreviousExperience}
                aria-label="Show previous skill"
              >
                ‹
              </button>

              <div key={currentExperience} className={styles.skillsCard}>
                <img src={workImg} className={styles.skillsImg} />
                <p className={styles.content}>
                  <strong className={styles.skillTitle}>
                    {experiences[currentExperience].company}
                  </strong>
                </p>
                <p className={styles.content}>
                  <em>{experiences[currentExperience].position}</em>
                </p>
                <p className={styles.content}>
                  <em>{experiences[currentExperience].date}</em>
                </p>
              </div>

              <button
                type="button"
                className={styles.carouselButton}
                onClick={showNextExperience}
                aria-label="Show next skill"
              >
                ›
              </button>
            </div>
          </section>

          {/* PROJECT PREVIEW CONTAINER */}
          <section style={{ margin: "auto", marginBottom: "70px" }}>
            <h1 className={styles.header}>Projects</h1>
            <div className={styles.skillsCarousel}>
              <button
                type="button"
                className={styles.carouselButton}
                onClick={showPreviousProject}
                aria-label="Show previous skill"
              >
                ‹
              </button>

              <div key={currentProject} className={styles.skillsCard}>
                <a
                  href={projects[currentProject].link}
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  <img
                    src={projects[currentProject].img}
                    className={styles.projectsImg}
                  />
                </a>
              </div>

              <button
                type="button"
                className={styles.carouselButton}
                onClick={showNextProject}
                aria-label="Show next skill"
              >
                ›
              </button>
            </div>
          </section>
        </article>
        <Footer />
      </div>
    </>
  );
}

export default About;
