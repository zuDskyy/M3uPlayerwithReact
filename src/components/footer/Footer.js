import React from "react";

const Footer = () => {
  return (
    <div
      className="homeFooter"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        height:100,
        background:"linear-gradient(to right, #09203f 0%, #453a94 100%)",
        opacity:0.7,
        paddingTop:'30px',
        zIndex:34
      }}
    >
      <div className="" style={{ flex: 3 }}>
        <span> &copy; copyRight 2022</span>
      </div>
      <div className="" style={{ flex: 2 }}>
        <h2>Z-player</h2>
      </div>
      <div className="" style={{ flex: 1}}>
        <h4>Powered By Zudskyy</h4>
      </div>
    </div>
  );
};

export default Footer;
