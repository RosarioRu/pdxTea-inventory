import React from "react";
import Header from "./Header";
import TeaInventoryControl from "./TeaInventoryControl";

// import testImage from "./../img/test.png";
// import steamImage from "./../img/steam.jpg"

function App() {

  const bodyStyles = {
    textAlign: "center",
    fontFamily: "'apple chancery', 'cursive'",
    

    // backgroundImage: "url("+steamImage+")",
    // backgroundSize: "cover",
    // backgroundRepeat: "no-repeat",
    // backgroundColor: "rgba(210,238,130,0.5)", 
    // backgroundColor: "rgba(151, 181, 150, 0.5)",
    backgroundImage: "linear-gradient(to top, rgba(151, 181, 150, 0.2), rgba(151, 181, 150, 0.7))",
    height: "100vh",

  }

  return (
    <React.Fragment>
      <Header />
      <div style={bodyStyles}>
        <TeaInventoryControl />
      </div>
    </React.Fragment> 
  );
}

export default App;