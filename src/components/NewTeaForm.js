import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid"; 


function NewTeaForm(props) {

  return (
    <React.Fragment>
      <form onSubmit={handleNewTeaFormSubmission}>
        <br/>
        <h4>Add Tea</h4>
        <table className="table">
          <tbody>
            <tr>
              <td>
                <input type="text" name="name" placeholder="Tea name" required />
              </td>
            </tr>
            <tr> 
              <td>
                <label htmlFor="type">Select type</label>
                <select id="type" name="type" required>
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
                <input type="text" name="origin" placeholder="Origin" />
              </td>
            </tr>
            <tr>
              <td>
                <input type="number" step="0.01" min="1" name="price" placeholder="Price per ounce" required />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="caffeineLevel">Caffeine Level</label>
                <select id="caffeineLevel" name="caffeineLevel">
                  <option value=""></option>
                  <option value="none">none</option>
                  <option value="low">low</option>
                  <option value="medium">medium</option>
                  <option value="high">high</option>
                </select>
                {/* <input type="text" name="caffeineLevel" placeholder="Caffeine level" /> */}
              </td>
            </tr>
            <tr>
              <td>
                <input type="number" name="numberOfCrates" min="1" placeholder="Number of crates" required />
              </td>
            </tr>
            <tr>
              <td>
              <button type="submit" className="btn btn-secondary btn-sm">Add Crate</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form> 
    </React.Fragment>
  );

  function handleNewTeaFormSubmission(event) {
    event.preventDefault();
    props.onNewTeaCreation({
      name: event.target.name.value,
      type: event.target.type.value,
      origin: event.target.origin.value,
      price: parseFloat(event.target.price.value),
      caffeineLevel: event.target.caffeineLevel.value,
      numberOfCrates: parseInt(event.target.numberOfCrates.value),
      amountInOunces: parseInt(event.target.numberOfCrates.value)*130,
      id: v4(),
    
    })
    console.log("PRICE IS: " + event.target.price.value)
  }

}

NewTeaForm.propTypes = {
  onNewTeaCreation: PropTypes.func
};

export default NewTeaForm;