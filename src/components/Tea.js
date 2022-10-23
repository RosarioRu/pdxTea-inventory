import React from "react";
import PropTypes from "prop-types";

function Tea(props) {

  const linkStyles = {
    textDecoration: "underline",
    color: "grey",
    fontSize: "small",
  }
    
  return (
    <React.Fragment>
        <h4>{props.name}</h4>
        <h6>Type: {props.type}</h6>
        <h6>Available Ounces: {props.amountInOunces}</h6>
        <p style={linkStyles} onClick={() => props.whenTeaClicked(props.id)}>details</p>

      <br/>
    </React.Fragment>
  );
}

Tea.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  numberOfCrates: PropTypes.string,
  amountInOunces: PropTypes.number,
  id: PropTypes.string,
  whenTeaClicked: PropTypes.func,
}

export default Tea;