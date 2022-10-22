import React from "react";

function Tea() {
  const name = "Peppermint Splash";
  const caffeine = "none";
  const amountOfCrates = 1;
  const amountInOunces = (130 * amountOfCrates);
  return (
    <React.Fragment>
      <h4>{name}</h4>
      <h6>Available Ounces: {amountInOunces}</h6>
      <h6>Amount of caffeine: {caffeine}</h6>
    </React.Fragment>
  );
}

export default Tea;