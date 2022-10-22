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

  handleClick = () => {
    this.setState(
      {newTeaFormVisible: true}
    );
  }

  render() {
    let currentVisibleState = null;
    let addTeaButton = null;

    if (this.state.newTeaFormVisible) {
      currentVisibleState = <NewTeaForm />
    } else {
      currentVisibleState = <TeaList />
      addTeaButton = <button onClick={this.handleClick} class="btn btn-secondary btn-sm">Add To Tea Inventory</button>
    }
    
    return (
      <React.Fragment>
        {currentVisibleState}
        {addTeaButton}
      </React.Fragment>

    );
  }

}

export default TeaInventoryControl;