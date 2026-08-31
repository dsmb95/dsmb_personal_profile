import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <>
      <div style={{ 
        display: 'flex', 
        backgroundColor: '#dccde2',
        borderRadius: '10px',
        alignItems:'center',
        justifyContent: 'center',
        alignText:'center',
        margin:'auto',
        marginBottom: '35px' 
        }}>
        <h1
          style={{
            fontFamily: "Alata",
            fontWeight: "bold",
            fontSize: "50px",
            color: "#4a3b52",
            backgroundColor: "#dccde2",
            marginLeft:'50px'
          }}
        >
          dsmb.
        </h1>
        <nav
          style={{
            display: "flex",
            margin: "auto"
          }}
        >
          <NavLink
            to="/"
            style={{
              fontFamily: "Alata",
              fontSize: "25px",
              backgroundColor: "#dccde2",
              color: "#4a3b52",
              textDecoration: "none",
              paddingRight:"25px"
            }}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            style={{
              fontFamily: "Alata",
              fontSize: "25px",
              backgroundColor: "#dccde2",
              color: "#4a3b52",
              textDecoration: "none",
              paddingRight:"15px"
            }}
          >
            About
          </NavLink>
        </nav>
      </div>
    </>
  );
}

export default Menu;
