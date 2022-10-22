import React from "react";
import PropTypes from "prop-types";

function Tea(props) {
  return (
    <React.Fragment>
      <h4>{props.name}</h4>
      <h6>Type: {props.type}</h6>
      <h6>Available Ounces: {props.amountInOunces}</h6>
    </React.Fragment>
  );
}

Tea.propTypes = {
  name: PropTypes.string,
  caffeineLevel: PropTypes.string,
  amountInOunces: PropTypes.number,
}

export default Tea;