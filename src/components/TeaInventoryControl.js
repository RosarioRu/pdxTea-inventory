import React from "react";
import NewTeaForm from "./NewTeaForm";
import TeaList from "./TeaList";

class TeaInventoryControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      newTeaFormVisible: false
    };
  }

  render() {
    let currentVisibleState = null;
    if (this.state.newTeaFormVisible) {
      currentVisibleState = <NewTeaForm />
    } else {
      currentVisibleState = <TeaList />
    }
    
    return (
      <React.Fragment>
        {currentVisibleState}
      </React.Fragment>

    );
  }

}

export default TeaInventoryControl;