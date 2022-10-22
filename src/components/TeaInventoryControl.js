import React from "react";
import NewTeaForm from "./NewTeaForm";
import TeaList from "./TeaList";

class TeaInventoryControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      newTeaFormVisible: false,
      mainTeaList: [],
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      newTeaFormVisible: !prevState.newTeaFormVisible
    }));
  }

  handleAddingNewTeaAfterNewTeaFormSubmission = (newTea) => {
    const updatedMainTeaList = this.state.mainTeaList.concat(newTea);
    this.setState({
      mainTeaList: updatedMainTeaList,
      newTeaFormVisible: false
    });
  }

  render() {
    let currentVisibleState = null;
    let buttonText = null;

    if (this.state.newTeaFormVisible) {
      currentVisibleState = 
        <NewTeaForm 
          onNewTeaCreation={this.handleAddingNewTeaAfterNewTeaFormSubmission}
        />
      buttonText = "Back to Tea List";
    } else {
      currentVisibleState = <TeaList teaList={this.state.mainTeaList} />
      buttonText = "Add To Tea Inventory";
    }
    
    return (
      <React.Fragment>
        {currentVisibleState}
        <button onClick={this.handleClick} className="btn btn-secondary btn-sm">{buttonText}</button>
      </React.Fragment>

    );
  }

}

export default TeaInventoryControl;