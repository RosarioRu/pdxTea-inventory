import React from "react";
import forestImage from "./../img/forest.jpg"


function Header() {

  const headerStyles = {
    border: "2px solid green",
    paddingLeft: "2%",
    paddingRight: "2%",
    fontFamily: "'apple chancery', 'cursive'",
    textAlign: "center",
    backgroundImage: "url("+forestImage+")",
    // backgroundImage: `url(${forestImage})`,
    h1: {
      //empty for now
      display: "inline",
      webkitTextStrokeWidth: "1px",
      webkitTextStrokeColor: "black",
      background: "rgba(230,251,173,0.35)", 
    },
    p: {
      fontStyle: "italic",
      display: "inline",
      fontSize: "large",
      webkitTextStrokeWidth: "1px",
      webkitTextStrokeColor: "black",
      background: "rgba(210,238,130,0.5)",
    }
  }

  return (
    <React.Fragment>
      <div style={headerStyles}>
        <br/><h1 style={headerStyles.h1}>Forest Park Tea</h1>
        <br/><p style={headerStyles.p}>Tranquil inventory tracking for the highest quality teas in PDX</p>
      </div>
    </React.Fragment>
  );
}

export default Header;