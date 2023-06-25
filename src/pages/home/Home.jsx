import React, { useState } from "react";
import "../../styles/home.css";
import { Icon } from "semantic-ui-react";
import { Grid, Paper, Tooltip } from "@mui/material";
import zplayer from "../../assets/z-playerLogo.jpg";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";


const Home = () => {
  const [activeItem, setActiveItem] = useState(false);

  const handleItemClick = () => {
    setActiveItem(true);
  };

 
  return (
    <div className="home">
      <nav className="homeMenu">
        <div className="homeMenuContainer">
          <div
            style={{
              paddingLeft: "2em",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <img
              src={zplayer}
              alt=""
              width="40px"
              height="40px"
              style={{ borderRadius: "50%" }}
            />
            <h2 style={{ marginBottom: 20, fontFamily: "Play" }}>Z-Player</h2>
          </div>
          <ul className="listMenu">
            <li className="homeMenuIcon">
              <Icon color="blue" name="h" /> Home{" "}
            </li>
            <Link to="/tv">
              <li className="homeMenuIcon">
                <Icon color="blue" name="play" /> Tv
              </li>
            </Link>
          </ul>
        </div>
      </nav>

      <div className="middleGrid">
        <div className="middleLeftContent">
          <h2>
            Welcome, we are glad to have you visit us, we offer all channels in
            one space, comfortable and customized Z-player
          </h2>
          <Link to="/tv">
            <button>Get Started</button>
          </Link>
        </div>
        <div className="middleRightCard">
          <Grid sx={{ flexGrow: 1 }} container spacing={2}>
            <Grid item xs={12}>
              <Grid container justifyContent="center" spacing={3}>
               
                  <Grid  item>
                    <Tooltip
                      sx={{ padding: "10px" }}
                      disableFocusListener
                      disableTouchListener
                    >
                      <Paper
                        sx={{
                          height: 250,
                          width: 300,
                          backgroundColor: (theme) =>
                            theme.palette.mode === "dark" ? "#1A2027" : "#fff",
                          backgroundImage: `url()`,
                          backgroundPosition: "center",
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                          borderRadius: 8,
                        }}
                      />
                    </Tooltip>
                  </Grid>
                
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>

      <div className="middleBottomContent">
        <h3 style={{color:'white', fontSize:"18px", wordWrap:"break-word" , width: "40%"}}>
          You will be able to add an unlimited number of Channel lists and Save
          your list every time{" "}
        </h3>
        <Link to="/tv">
          <button> Upload and Enjoy </button>
        </Link>
      </div>
      <div className="tvM3uInfo"></div>
      <Footer />
    </div>
  );
};

export default Home;
