import React from "react";
import Header from "./Header";
import TeaList from "./TeaList";
// import TeaInventoryControl from "./TeaInventoryControl";

function App() {
  return (
    <React.Fragment>
      <Header />
      <TeaList /> 
      {/* <TeaInventoryControl /> */}
    </React.Fragment>
  );
}

export default App;