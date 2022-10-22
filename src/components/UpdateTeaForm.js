import React from "react";
import PropTypes from "prop-types";

function UpdateTeaForm(props) {
  return (
    <React.Fragment>
      <h1>Update form goes here</h1>
      <p>Checking that {props.tea.name} is the selected tea's name!</p>
    </React.Fragment>
  );
}

UpdateTeaForm.propTypes = {
  tea: PropTypes.object,
};

export default UpdateTeaForm;