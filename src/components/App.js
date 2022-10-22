import React from "react";
import Header from "./Header";
import TeaInventoryControl from "./TeaInventoryControl";

function App() {

  const bodyStyles = {
    border: "2px solid black",
    textAlign: "center",
    backgroundColor: "rgba(210,238,130,0.5)", 
    height: "100vh"
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