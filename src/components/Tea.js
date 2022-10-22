import React from "react";
import PropTypes from "prop-types";

function Tea(props) {
  return (
    <React.Fragment>
      <div onClick = {() => props.whenTeaClicked(props.id)}>
        <h4>{props.name}</h4>
        <h6>Type: {props.type}</h6>
        <h6>Available Ounces: {props.amountInOunces}</h6>
      </div>
      <br/>
    </React.Fragment>
  );
}

Tea.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  numberOfCrates: PropTypes.number,
  amountInOunces: PropTypes.number,
  id: PropTypes.string,
  whenTeaClicked: PropTypes.func,
}

export default Tea;