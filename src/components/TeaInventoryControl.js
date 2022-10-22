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
    this.setState(prevState => ({
      newTeaFormVisible: !prevState.newTeaFormVisible
    }));
  }

  render() {
    let currentVisibleState = null;
    let buttonText = null;

    if (this.state.newTeaFormVisible) {
      currentVisibleState = <NewTeaForm />
      buttonText = "Back to Tea List";
    } else {
      currentVisibleState = <TeaList />
      buttonText = "Add To Tea Inventory";
    }
    
    return (
      <React.Fragment>
        {currentVisibleState}
        <button onClick={this.handleClick} class="btn btn-secondary btn-sm">{buttonText}</button>
      </React.Fragment>

    );
  }

}

export default TeaInventoryControl;