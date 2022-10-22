import React from "react";
import PropTypes from "prop-types"

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
                <input type="text" name="name" placeholder="Tea name" />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="type">Select type</label>
                <select id="type" name="type">
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
                <input type="number" name="price" placeholder="Price per ounce" />
              </td>
            </tr>
            <tr>
              <td>
                <input type="text" name="caffeineLevel" placeholder="Caffeine level" />
              </td>
            </tr>
            <tr>
              <td>
                <input type="number" name="numberOfCrates" placeholder="Number of crates" />
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
      price: parseInt(event.target.price.value),
      caffeineLevel: event.target.caffeineLevel.value,
      numberOfCrates: parseInt(event.target.numberOfCrates.value),
      amountInOunces: parseInt(event.target.numberOfCrates.value)*130,
    })
  }

}

NewTeaForm.propTypes = {
  onNewTeaCreation: PropTypes.func
};

export default NewTeaForm;