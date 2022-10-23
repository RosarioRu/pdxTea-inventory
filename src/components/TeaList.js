import React from "react";
import Tea from "./Tea";
import PropTypes from "prop-types";



const listStyles = {
  // border: "2px solid black"
}

function TeaList(props) {
  return (
    <React.Fragment>
      <div style={listStyles}>
        <br/>
        {props.teaList.map((tea) =>
          <Tea 
            whenTeaClicked={props.onTeaSelection}
            name={tea.name}
            type={tea.type}
            origin={tea.origin}
            price={tea.price}
            caffeineLevel={tea.caffeineLevel}
            // numberOfCrates={tea.numberOfCrates}
            numberOfCrates={parseFloat(tea.numberOfCrates).toFixed(2)}
            amountInOunces={tea.amountInOunces}
            key={tea.id}
            id={tea.id}
          />
        )}
        <br/>
      </div>
    </React.Fragment>
  );
}

TeaList.propTypes = {
  teaList: PropTypes.array,
  onTeaSelection: PropTypes.func,
};

export default TeaList;