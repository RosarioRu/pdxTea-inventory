import React from "react";
import Tea from "./Tea";

const mainTeaList = [
  {
    name: "Peppermint Splash",
    caffeine: "none",
    numberOfCrates: 1,
    amountInOunces: 1*130
  },
  {
    name: "Earl Green",
    caffeine: "medium",
    numberOfCrates: 2,
    amountInOunces: 2*130
  },
  {
    name: "Morning Run",
    caffeine: "high",
    numberOfCrates: 3,
    amountInOunces: 130*3
  }
];

function TeaList() {
  return (
    <React.Fragment>
    {mainTeaList.map((tea, index) =>
      <Tea 
        name={tea.name}
        caffeine={tea.caffeine}
        numberOfCrates={tea.numberOfCrates}
        amountInOunces={tea.amountInOunces}
        key={index}
      />
    )}
    </React.Fragment>
  );
}

export default TeaList;