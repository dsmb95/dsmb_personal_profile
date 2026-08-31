import Menu from "../components/menu.jsx";

function About() {
  return (
    <>
      <div style={{ margin: "100px" }}>
        <Menu />
        <article>
          <section style={{ margin: "auto" }}>
              <h1
                style={{
                  backgroundColor: "transparent",
                  fontFamily: "Alata",
                  textAlign: "center",
                  color: "#4a3b52",
                  fontWeight: "bold",
                  margin: "20px",
                  fontSize: "35px",
                }}
              >
                Education & Background
              </h1>
              <p
              style={{
                textAlign: "center",
                marginLeft: "20px",
                fontFamily: "Alata",
                fontSize: "20px",
                color: "#36454f",
                padding: "10px"
              }}
              >
                Software Development Bootcamp, Circuit Stream, <em>Online</em> Sep 2025 - June 2026
              </p>
              <p
              style={{
                textAlign: "center",
                marginLeft: "20px",
                fontFamily: "Alata",
                fontSize: "20px",
                color: "#36454f",
                padding: "10px"
              }}
              >
                Certificate in Business Administration, University of Victoria, <em>Victoria, BC</em> Sep 2023 - June 2024
              </p>
              <p
              style={{
                textAlign: "center",
                marginLeft: "20px",
                fontFamily: "Alata",
                fontSize: "20px",
                color: "#36454f",
                padding: "10px"
              }}
              >
                Bachelor of Science in Nursing, University of Santo Tomas, <em>Manila, Philippines</em> Jun 2011 - May 2015
              </p>
          </section>
        </article>
      </div>
    </>
  );
}

export default About;
