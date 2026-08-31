import Menu from "../components/menu.jsx";
import dsmbImage from "../assets/dsmb.JPG";
import mypmosbuddy from "../assets/mypmosbuddy.png";
import mynotetaking from "../assets/my note app.png"

function Home() {
  return (
    <div style={{ margin: "100px" }}>
      <Menu />
      <div style={{ width: "900px", display: "flex", margin:"auto"}}>
        <img
          src={dsmbImage}
          alt="Profile picture"
          style={{ width: "200px", borderRadius: "100px" }}
        />
        <p
          style={{
            marginTop: "60px",
            textAlign: "center",
            padding: "20px",
            fontFamily: "Alata",
            fontSize: "18px",
            color: "#36454f"
          }}
        >
          Hi, I am Sam, a full-stack software developer from Victoria, BC. I
          have a background in healthcare and my focus is building scalable
          programs that help solve real-world problems. I am incredibly
          passionate about blending the world of health care and programming to
          produce solutions to everyday health care problems.
        </p>
      </div>

      <div
        style={{
          alignText: "center",
          justifyContent: "center",
          alignSelf: "center",
          margin: "20px",
          padding: "1px",
          backgroundColor: "#dccde2",
          borderRadius: "10px",
        }}
      >
        <h2
          style={{
            backgroundColor: "transparent",
            fontFamily: "Alata",
            textAlign: "center",
            color: "#4a3b52",
            fontWeight: "bold",
            margin: "20px",
            fontSize: "30px",
          }}
        >
          Projects
        </h2>
      </div>
      <a
        href="https://my-pmos-buddy-frontend.onrender.com"
        style={{
          textDecoration: "none",
          color: "inherit",
        }}
      >
        <div style={{ margin: "auto", padding: "40px" }}>
          <div style={{ display: "flex", marginBottom:"20px" }}>
            <img
              src={mypmosbuddy}
              style={{
                width: "200px",
                height: "200px",
                borderRadius: "10px",
                justifyContent: "center",
                alignItems: "center",
              }}
            />
            <p
              style={{
                marginTop: "55px",
                textAlign: "left",
                marginLeft: "20px",
                fontFamily: "Alata",
                fontSize: "18px",
                color: "#36454f",
                padding: "30px"
              }}
            >
              A full-stack health tracking web application that allows women to
              monitor personal health patterns, symptoms, and treatments.
              Especially those who are diagnosed with PMOS (Polymetabolic
              Ovarian Syndrome).
            </p>
          </div>
          <div style={{ display: "flex", marginBottom:"20px" }}>
            <img
              src={mynotetaking}
              style={{
                width: "200px",
                height: "200px",
                borderRadius: "10px",
                justifyContent: "center",
                alignItems: "center",
              }}
            />
            <p
              style={{
                marginTop: "55px",
                textAlign: "left",
                margin: "auto",
                fontFamily: "Alata",
                fontSize: "18px",
                color: "#36454f",
                padding: "30px"
              }}
            >
              A full-stack note-taking web application.
            </p>
          </div>
        </div>
      </a>
    </div>
  );
}

export default Home;
