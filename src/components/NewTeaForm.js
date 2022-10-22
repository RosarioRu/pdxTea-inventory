import React from "react";

function NewTeaForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={handleNewTeaFormSubmission}>
      <br/>
      <table class="table">
        <thead>
          <h3>Add a New Crate of Tea</h3>
        </thead>
        <tbody>
          <tr>
            <td>
              <input type="text" name="name" placeholder="Tea name" />
            </td>
          </tr>
          <tr>
            <td>
              <label for="type">Select type</label>
              <select id="type" name="type">
                <option value="green">Green</option>
                <option value="black">Black</option>
                <option value="oolong">Oolong</option>
                <option value="herbal">Herbal</option>
                <option value="blend">Blend</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>
              <input type="text" name="origin" placeholder="Origin" />
            </td>
          </tr>
          <tr>
            <td>
              <input type="number" name="price" placeholder="Price per ounce" />
            </td>
          </tr>
          <tr>
            <td>
              <input type="text" name="caffeineLevel" placeholder="Caffeine level" />
            </td>
          </tr>
          <tr>
            <td>
            <button type="submit">Add Crate</button>
            </td>
          </tr>
        </tbody>
      </table>
          

          
      {/* <input type="text" name="name" placeholder="Tea name" /><br/><br/>

      <label for="type">Select type</label>
      <select id="type" name="type">
        <option value="green">Green</option>
        <option value="black">Black</option>
        <option value="oolong">Oolong</option>
        <option value="herbal">Herbal</option>
        <option value="blend">Blend</option>
      </select><br/><br/>

      <input type="text" name="origin" placeholder="Origin" /><br/><br/>

      <input type="number" name="price" placeholder="Price per ounce" /><br/><br/>

      <input type="text" name="caffeineLevel" placeholder="Caffeine level" /> 

      <button type="submit">Add Crate</button> */}
     </form> 
    </React.Fragment>
  );

  function handleNewTeaFormSubmission(event) {
    event.preventDefault();
    console.log(event.target.name.value);
    console.log(event.target.type.value);
    console.log(event.target.origin.value);
    console.log(event.target.price.value);
    console.log(event.target.caffeineLevel.value);
  }

}

export default NewTeaForm;