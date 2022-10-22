import React from "react";
import Tea from "./Tea";
import PropTypes from "prop-types";

// const mainTeaList = [
//   {
//     name: "Peppermint Splash",
//     caffeine: "none",
//     numberOfCrates: 1,
//     amountInOunces: 1*130
//   },
//   {
//     name: "Earl Green",
//     caffeine: "medium",
//     numberOfCrates: 2,
//     amountInOunces: 2*130
//   },
//   {
//     name: "Morning Run",
//     caffeine: "high",
//     numberOfCrates: 3,
//     amountInOunces: 130*3
//   }
// ];

const listStyles = {
  border: "2px solid black"
}

function TeaList(props) {
  return (
    <React.Fragment>
      <div style={listStyles}>
        <br/>
        {props.teaList.map((tea, index) =>
          <Tea 
            name={tea.name}
            type={tea.type}
            origin={tea.origin}
            price={tea.price}
            caffeineLevel={tea.caffeineLevel}
            numberOfCrates={tea.numberOfCrates}
            amountInOunces={tea.amountInOunces}
            key={index}
          />
        )}
        <br/>
      </div>
    </React.Fragment>
  );
}

TeaList.propTypes = {
  teaList: PropTypes.array
};

export default TeaList;