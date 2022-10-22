import React from "react";
import PropTypes from "prop-types";

function Tea(props) {
  return (
    <React.Fragment>
      <h4>{props.name}</h4>
      <h6>Amount of caffeine: {props.caffeine}</h6>
      <h6>Available Ounces: {props.amountInOunces}</h6>
      
    </React.Fragment>
  );
}

Tea.propTypes = {
  name: PropTypes.string.isRequired,
  caffeine: PropTypes.string,
  amountInOunces: PropTypes.number.isRequired
}

export default Tea;