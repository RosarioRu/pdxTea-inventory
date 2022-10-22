import React from "react";

function Header() {

  const headerStyles = {
    border: "2px solid green",
    paddingLeft: "2%",
    paddingRight: "2%",
    fontFamily: "'apple chancery', 'cursive'",
    textAlign: "center",
    h1: {
      //empty for now
    },
    p: {
      fontStyle: "italic",
    }
  }

  return (
    <React.Fragment>
      <div style={headerStyles}>
        <br/><h1>Forest Park Tea</h1>
        <p style={headerStyles.p}>Tranquil inventory tracking for the highest quality teas in PDX</p>
      </div>
    </React.Fragment>
  );
}

export default Header;