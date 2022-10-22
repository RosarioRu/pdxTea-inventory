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
    
    return (
      <React.Fragment>
        <TeaList />
      </React.Fragment>

    );
  }

}

export default TeaInventoryControl;