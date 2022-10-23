import React from "react";
import PropTypes from "prop-types";

function TeaDetail(props) {

  const buttonStyles = {
    margin: "2px",
    marginLeft: "1%",
    marginRight: "1%",
    sell: {
      marginLeft: "1%",
      marginRight: "1%",
    }
  }



  

  return (
    <React.Fragment>
      <br/>
      <h4>{props.tea.name} Details</h4>
      <h6>Type: {props.tea.type}</h6>
      <h6>Origin: {props.tea.origin}</h6>
      <h6>Price: ${props.tea.price}/oz</h6>
      <h6>Caffeine: {props.tea.caffeineLevel}</h6>
      <h6>Crates: {parseFloat(props.tea.numberOfCrates).toFixed(2)}</h6>
      <h6>Ounce: {props.tea.amountInOunces}</h6>
      <br/>

      <button onClick={props.onSellClick} className="btn btn-outline-dark btn-sm" style={buttonStyles.sell}>Sell 1oz</button>

      <button onClick={props.onSellThreeOzClick} className="btn btn-outline-dark btn-sm" style={buttonStyles.sell}>Sell 3oz</button>

      <button onClick={props.onSellTenOzClick} className="btn btn-outline-dark btn-sm" style={buttonStyles.sell}>Sell 10oz</button>

      <br/><br/><br/><br/>

      <button style={buttonStyles} onClick={props.onEditClick} className="btn btn-secondary btn-sm">Update Tea Info</button>
    </React.Fragment>
  );
}

TeaDetail.propTypes = {
  tea: PropTypes.object,
  onEditClick: PropTypes.func,
  onSellClick: PropTypes.func,
  onSellThreeOzClick: PropTypes.func,
  onSellTenOzClick: PropTypes.func,
};
  
export default TeaDetail;
  