import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid"; 


function UpdateTeaForm(props) {
  const updateFormStyles = {
    width: "50%",
    marginLeft: "auto",
    marginRight: "auto",
    input: {
      textAlign: "center",
      marginLeft: "3px",
    },
  }

  return (
    <React.Fragment>

      <form style={updateFormStyles} onSubmit={handleUpdateTeaFormSubmission}>
        <br/>
        <h4>{props.tea.name}: Update Information</h4>
        <table className="table">
          <tbody>
            <tr>
              <td>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" placeholder={props.tea.name} style={updateFormStyles.input} required />
              </td>
            </tr>
            <tr> 
              <td>
                <label htmlFor="type">Select type</label>
                <select id="type" name="type" required style={updateFormStyles.input}>
                  <option></option>
                  <option value="green">Green</option>
                  <option value="black">Black</option>
                  <option value="oolong">Oolong</option>
                  <option value="herbal">Herbal</option>
                  <option value="blend">Blend</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="origin">Origin</label>
                <input type="text" name="origin" placeholder={props.tea.origin} style={updateFormStyles.input} />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="price">Price</label>
                <input type="number" step="0.01" min="1" name="price" placeholder={props.tea.price} style={updateFormStyles.input} required />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="caffeineLevel">Caffeine Level</label>
                <select id="caffeineLevel" name="caffeineLevel" style={updateFormStyles.input}>
                  <option value=""></option>
                  <option value="none">none</option>
                  <option value="low">low</option>
                  <option value="medium">medium</option>
                  <option value="high">high</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="numberOfCrates">Crates</label> 
                <input type="number" name="numberOfCrates" min="1" placeholder={props.tea.numberOfCrates} style={updateFormStyles.input} required />
              </td>
            </tr>
            <tr>
              <td>
              <button type="submit" className="btn btn-secondary btn-sm">Update</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form> 
    </React.Fragment>
  );

  function handleUpdateTeaFormSubmission(event) {
    event.preventDefault();
    props.onUpdateFormSubmission({
      name: event.target.name.value,
      type: event.target.type.value,
      origin: event.target.origin.value,
      price: parseFloat(event.target.price.value),
      caffeineLevel: event.target.caffeineLevel.value,
      numberOfCrates: parseFloat(event.target.numberOfCrates.value).toFixed(2),
      amountInOunces: parseInt(event.target.numberOfCrates.value)*130,
      id: v4(),
    });
  }
};

UpdateTeaForm.propTypes = {
  tea: PropTypes.object,
  onUpdateFormSubmission: PropTypes.func,
};

export default UpdateTeaForm;