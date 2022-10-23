import React from "react";
import forestImage from "./../img/forest.png";


function Header() {

  const headerStyles = {
    paddingLeft: "2%",
    paddingRight: "2%",
    paddingBottom: "1%",
    fontFamily: "'apple chancery', 'cursive'",
    textAlign: "center",
    backgroundImage: "url("+forestImage+")",
    // backgroundImage: `url(${forestImage})`,
    h1: {
      display: "inline",
      padding: "3px",
      paddingLeft: "6px",
      paddingRight: "6px",
      fontWeight: "bolder",
      background: "rgba(230,251,173,0.1)", 
    },
    p: {
      fontStyle: "italic",
      display: "inline",
      fontSize: "x-large",
      padding: "3px",
      paddingLeft: "6px",
      paddingRight: "6px",
      paddingBottom: "5px",
      fontWeight: "bolder",
      WebkitTextStrokeWidth: "0.3px",
      background: "rgba(230,251,173,0.2)",
    }
  }

  return (
    <React.Fragment>
      <div style={headerStyles}>
        <br/><h1 style={headerStyles.h1}>Forest Park Tea</h1>
        <br/><p style={headerStyles.p}>Inventory tracking for the highest quality teas in PDX</p>
      </div>
    </React.Fragment>
  );
}

export default Header;