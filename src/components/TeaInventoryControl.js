import React from "react";
import NewTeaForm from "./NewTeaForm";
import TeaDetail from "./TeaDetail";
import TeaList from "./TeaList";

class TeaInventoryControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      newTeaFormVisible: false,
      mainTeaList: [],
      selectedTea: null,
    };
  }

  // handleClick = () => {
  //   this.setState(prevState => ({
  //     newTeaFormVisible: !prevState.newTeaFormVisible
  //   }));
  // }

  handleClick = () => {
    if (this.state.selectedTea != null) {
      this.setState({
        newTeaFormVisible: false,
        selectedTea: null
      });
    } else {
      this.setState(prevState => ({
        newTeaFormVisible: !prevState.newTeaFormVisible,
      }));
    }
  }

  handleAddingNewTeaAfterNewTeaFormSubmission = (newTea) => {
    const updatedMainTeaList = this.state.mainTeaList.concat(newTea);
    this.setState({
      mainTeaList: updatedMainTeaList,
      newTeaFormVisible: false
    });
  }

  handleUpdatingSelectedTea = (id) => {
    const teaThatWasClicked = this.state.mainTeaList.filter(tea => tea.id === id)[0];
    this.setState({
      selectedTea: teaThatWasClicked
    });
  }

  render() {
    let currentVisibleState = null;
    let buttonText = null;

    if (this.state.selectedTea != null) {
      currentVisibleState = 
        <TeaDetail
          tea = {this.state.selectedTea}
        />
        buttonText = "Back to tea list";
    } 
    else if (this.state.newTeaFormVisible) {
      currentVisibleState = 
        <NewTeaForm 
          onNewTeaCreation={this.handleAddingNewTeaAfterNewTeaFormSubmission}
        />
      buttonText = "Back to Tea List";
    } else {
      currentVisibleState = 
        <TeaList 
          teaList={this.state.mainTeaList} 
          onTeaSelection={this.handleUpdatingSelectedTea}
        />
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