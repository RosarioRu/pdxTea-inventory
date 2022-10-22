import React from "react";
import PropTypes from "prop-types";

function TeaDetail(props) {
  return (
    <React.Fragment>
      <h4>{props.tea.name} Details</h4>
      <h6>Type: {props.tea.type}</h6>
      <h6>Origin: {props.tea.origin}</h6>
      <h6>Price: ${props.tea.price}/oz</h6>
      <h6>Caffeine: {props.tea.caffeineLevel}</h6>
      <h6>Crates: {props.tea.numberOfCrates}</h6>
      <h6>Ounce: {props.tea.amountInOunces}</h6>
    </React.Fragment>
  );
}

TeaDetail.propTypes = {
  tea: PropTypes.object
};
  
export default TeaDetail;
  