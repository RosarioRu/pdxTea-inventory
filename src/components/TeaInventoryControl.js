import React from "react";
import NewTeaForm from "./NewTeaForm";
import TeaDetail from "./TeaDetail";
import TeaList from "./TeaList";
import UpdateTeaForm from "./UpdateTeaForm";

class TeaInventoryControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      newTeaFormVisible: false,
      updateTeaFormVisible: false,
      mainTeaList: [],
      selectedTea: null,
    };
  }

  handleEditClick = () => {
    this.setState({
      updateTeaFormVisible: true,      
    });
  }

  handleClick = () => {
    if (this.state.updateTeaFormVisible) {
      this.setState({
        updateTeaFormVisible: false,
      });
    } else if (this.state.selectedTea != null) {
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

  handleUpdatingTeaInList = (editedVersionOfSelectedTea) => {
    const updatedMainTeaList = this.state.mainTeaList
      .filter(tea => tea.id !== this.state.selectedTea.id)
      .concat(editedVersionOfSelectedTea);
    this.setState({
      mainTeaList: updatedMainTeaList,
      updateTeaFormVisible: false,
      selectedTea: null,
    });
  }

  handleSellingSelectedTea = () => {
    const teaThatSold = this.state.selectedTea;
    const ouncesOfTeaBeforeSale = this.state.selectedTea.amountInOunces;
    if (ouncesOfTeaBeforeSale>=1) {
      const ouncesOfTeaAfterSale = ouncesOfTeaBeforeSale - 1;
      const cratesOfTeaBeforeSale = this.state.selectedTea.numberOfCrates;
      const cratesOfTeaAfterSale = cratesOfTeaBeforeSale - (1/130);
      const teaSold = (this.state.selectedTea.teaSold || 0)
      const editedVersionOfTeaThatSold = {...teaThatSold, amountInOunces: ouncesOfTeaAfterSale, numberOfCrates: cratesOfTeaAfterSale, teaSold:(teaSold +1)};
      const updatedMainTeaList = this.state.mainTeaList
        .filter(tea => tea.id !== this.state.selectedTea.id)
        .concat(editedVersionOfTeaThatSold);
      this.setState({
        mainTeaList: updatedMainTeaList,
        updateTeaFormVisible: false,
        selectedTea: null,
      });
    } else {
      alert("Not Enough Tea Left For This Sale");
    }
  }

  handleSellingThreeOunces= () => {
    const teaThatSold = this.state.selectedTea;
    const ouncesOfTeaBeforeSale = this.state.selectedTea.amountInOunces;
    if (ouncesOfTeaBeforeSale>=3) {
      const ouncesOfTeaAfterSale = ouncesOfTeaBeforeSale - 3;
      const cratesOfTeaBeforeSale = this.state.selectedTea.numberOfCrates;
      const cratesOfTeaAfterSale = cratesOfTeaBeforeSale - (3/130);
      const teaSold = (this.state.selectedTea.teaSold || 0)
      const editedVersionOfTeaThatSold = {...teaThatSold, amountInOunces: ouncesOfTeaAfterSale, numberOfCrates: cratesOfTeaAfterSale, teaSold:(teaSold +3)};
      const updatedMainTeaList = this.state.mainTeaList
        .filter(tea => tea.id !== this.state.selectedTea.id)
        .concat(editedVersionOfTeaThatSold);
      this.setState({
        mainTeaList: updatedMainTeaList,
        updateTeaFormVisible: false,
        selectedTea: null,
      });
    } else {
      alert("Not Enough Tea Left For This Sale");
    }
  }

  handleSellingTenOunces= () => {
    const teaThatSold = this.state.selectedTea;
    const ouncesOfTeaBeforeSale = this.state.selectedTea.amountInOunces;
    if (ouncesOfTeaBeforeSale>=10) {
      const ouncesOfTeaAfterSale = ouncesOfTeaBeforeSale - 10;
      const cratesOfTeaBeforeSale = this.state.selectedTea.numberOfCrates;
      const cratesOfTeaAfterSale = cratesOfTeaBeforeSale - (10/130);
      const teaSold = (this.state.selectedTea.teaSold || 0)
      const editedVersionOfTeaThatSold = {...teaThatSold, amountInOunces: ouncesOfTeaAfterSale, numberOfCrates: cratesOfTeaAfterSale, teaSold:(teaSold +10)};
      const updatedMainTeaList = this.state.mainTeaList
        .filter(tea => tea.id !== this.state.selectedTea.id)
        .concat(editedVersionOfTeaThatSold);
      this.setState({
        mainTeaList: updatedMainTeaList,
        updateTeaFormVisible: false,
        selectedTea: null,
      });
    } else {
      alert("Not Enough Tea Left For This Sale");
    }
  }

  render() {
    let currentVisibleState = null;
    let buttonText = null;

    if (this.state.updateTeaFormVisible) {
      currentVisibleState = 
        <UpdateTeaForm 
          tea = {this.state.selectedTea}
          onUpdateFormSubmission={this.handleUpdatingTeaInList}
        />
      buttonText = "Back";
    } else if (this.state.selectedTea != null) {
      currentVisibleState = 
        <TeaDetail
          tea = {this.state.selectedTea}
          onEditClick={this.handleEditClick}
          onSellClick={this.handleSellingSelectedTea}
          onSellThreeOzClick={this.handleSellingThreeOunces}
          onSellTenOzClick={this.handleSellingTenOunces}
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
      buttonText = "Add a new Tea";
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