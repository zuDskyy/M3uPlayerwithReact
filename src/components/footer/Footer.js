import { List } from "@mui/material";
import React from "react";


const Footer = () => {
  const ASSETS = process.env.REACT_APP_M3U_ASSETS;

  const handleClickSocialWithNewBlank = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div
      className="homeFooter"
      style={{
        display: "flex",
        padding: 20,
        height: 200,
        background: "linear-gradient(to right, #09203f 0%, #453a94 100%)",
        opacity: 0.7,
        zIndex: 34,
        color: "white",
      }}
    >
      <div className="" style={{ flex: 3, position: "relative" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
          <img
            width={40}
            height={40}
            style={{ borderRadius: 25 }}
            src={ASSETS + "/zplayer.jpg"}
            alt=""
          />
          <span style={{ fontSize: 22 }}>ZIPTV - Player</span>
        </div>
        <span style={{ position: "absolute", bottom: 0 }}>
          {" "}
          &copy; copyRight 2022
        </span>
      </div>
      <div className="" style={{ flex: 2, position: "relative" }}>
        <div className="footerContent-Menu">
          <h4>Menu</h4>
          <List>home</List>
          <List>Tv</List>
        </div>
        <span style={{ position: "absolute", bottom: 0 }}>TEST V1.0</span>
      </div>
      <div className="" style={{ flex: 1, position: "relative" }}>
        <div className="social-Network" style={{ color: "white" }}>
          <h4>Contact</h4>

          <List
            onClick={() =>
              handleClickSocialWithNewBlank(`https://github.com/zuDskyy`)
            }
            sx={{
              display: "flex",
              cursor: "pointer",
              alignItems: "center",
              gap: 1,
              color: "white",
            }}
          >
            <img
              color="blue"
              style={{ width: 30, height: 30 }}
              src={ASSETS + "/github.png"}
              alt=""
            />
            Github
          </List>
          <List
            onClick={() =>
              handleClickSocialWithNewBlank(
                `https://www.linkedin.com/in/zurab-dalakishvili-a7b996220/`
              )
            }
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              cursor: "pointer",
              color: "white",
            }}
          >
            <img
              style={{ width: 30, height: 30 }}
              src={ASSETS + "/linkedin.png"}
              alt=""
            />
            Linkedin
          </List>
        </div>
        <h4 style={{ position: "absolute", bottom: 0 }}>Powered By ZuDskyy</h4>
      </div>
    </div>
  );
};

export default Footer;
