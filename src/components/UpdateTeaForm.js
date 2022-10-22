import React from "react";
import PropTypes from "prop-types";

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

      <form style={updateFormStyles}>
        <br/>
        <h4>{props.tea.name}: Update Information</h4>
        <table className="table">
          <tbody>
            <tr>
              <td>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" placeholder={props.tea.name} style={updateFormStyles.input} />
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
                <input type="number" step="0.01" min="1" name="price" placeholder={props.tea.price} style={updateFormStyles.input} />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="numberOfCrates">Crates</label> 
                <input type="number" name="numberOfCrates" min="1" placeholder={props.tea.numberOfCrates} style={updateFormStyles.input}  />
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



{/* 
      <h1>Update form goes here</h1>
      <p>Checking that {props.tea.name} is the selected tea's name!</p> */}
    </React.Fragment>
  );
}

UpdateTeaForm.propTypes = {
  tea: PropTypes.object,
};

export default UpdateTeaForm;