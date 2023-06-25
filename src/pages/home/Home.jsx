import React, { useState } from "react";
import "../../styles/home.css";
import { Icon } from "semantic-ui-react";
import { Grid, Paper, Tooltip } from "@mui/material";
import zplayer from "../../assets/z-playerLogo.jpg";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";

const Home = () => {
  const [activeItem, setActiveItem] = useState(false);
  const ASSETS = process.env.REACT_APP_M3U_ASSETS;
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
            <h2 style={{ marginBottom: 20, fontFamily: "Play" }}>ZIPTV - Player</h2>
             <span>TEST V1.0</span>
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

      <div className="middleGrid"  >
        <div className="middleLeftContent" style={{paddingLeft:50, width:800}}>
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
              <Grid container justifyContent="center" alignItems="center" spacing={3}>
                <Grid item>
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
                        backgroundImage: `url(${ASSETS + "/setanta.png"})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        borderRadius: 8,
                      }}
                    />
                  </Tooltip>
                </Grid>

                <Grid item>
                  <Tooltip
                    sx={{ padding: "10px" }}
                    disableFocusListener
                    disableTouchListener
                  >
                    <Paper
                      sx={{
                        height: 300,
                        width: 600,
                        backgroundColor: (theme) =>
                          theme.palette.mode === "dark" ? "#1A2027" : "#fff",
                        backgroundImage: `url(${ASSETS + "/premier.png"})`,
                        backgroundPosition: "center",
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        borderRadius: 8,
                      }}
                    />
                  </Tooltip>
                </Grid>
                <Grid item>
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
                        backgroundImage: `url(${ASSETS + "/uefa.jpg"})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        borderRadius: 8,
                      }}
                    />
                  </Tooltip>
                </Grid>
                <Grid item>
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
                        backgroundImage: `url(${ASSETS + "/netflix.png"})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        borderRadius: 8,
                      }}
                    />
                  </Tooltip>
                </Grid>
                <Grid item>
                  <Tooltip
                    sx={{ padding: "10px" }}
                    disableFocusListener
                    disableTouchListener
                  >
                    <Paper
                      sx={{
                        height: 300,
                        width: 500,
                        backgroundColor: (theme) =>
                          theme.palette.mode === "dark" ? "#1A2027" : "#fff",
                        backgroundImage: `url(${ASSETS + "/universal.png"})`,
                        backgroundPosition: "center",
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        borderRadius: 8,
                      }}
                    />
                  </Tooltip>
                </Grid>
                <Grid item>
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
                        backgroundImage: `url(${ASSETS + "/cooking.jpg"})`,
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
    <div style={{display:'flex',padding:10}}>
     
      <Grid sx={{ flexGrow: 1 }} container spacing={2}>
            <Grid item xs={12}>
              <Grid container justifyContent="center" alignItems="center" spacing={3}>
      <Grid item>
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
                        backgroundImage: `url(${ASSETS + "/bbc.svg"})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        borderRadius: 8,
                      }}
                    />
                  </Tooltip>
                </Grid>
                <Grid item>
                  <Tooltip
                    sx={{ padding: "10px" }}
                    disableFocusListener
                    disableTouchListener
                  >
                    <Paper
                      sx={{
                        height: 250, width: 300,
                       
                        backgroundColor: (theme) =>
                          theme.palette.mode === "dark" ? "#1A2027" : "#fff",
                        backgroundImage: `url(${ASSETS + "/cartoon.svg"})`,
                        backgroundPosition: "center",
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        borderRadius: 8,
                      }}
                    />
                  </Tooltip>
                </Grid>
                <Grid item>
                  <Tooltip
                    sx={{ padding: "10px", }}
                    disableFocusListener
                    disableTouchListener
                  >
                    <Paper
                      sx={{
                        height: 300, width: 500,
                        backgroundColor: (theme) =>
                          theme.palette.mode === "dark" ? "#1A2027" : "#fff",
                        backgroundImage: `url(${ASSETS + "/discovery.png"})`,
                        backgroundPosition: "center",
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        borderRadius: 8,
                      }}
                    />
                  </Tooltip>
                </Grid>
               
      </Grid>
      </Grid>
      </Grid>

       
      <div className="middleBottomContent">
   
        <h3
          style={{
            color: "white",
            fontSize: "22px",
            fontWeight:300,
            wordWrap: "break-word",
            width: "100%",
          }}
        >
          You will be able to add an unlimited number of Channel lists and Save
          your list every time{" "}
        </h3>
        <Link to="/tv">
          <button> Upload and Enjoy </button>
        </Link>
      </div>
      </div>
      <div className="tvM3uInfo"></div>
      <Footer />
    </div>
  );
};

export default Home;
