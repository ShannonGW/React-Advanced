import React from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);
  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);

    // remove one item from array at a time with the filter method.
    // Create new variable 'newPeople' and filter through the 'people' array.
    //if there person.id doesn't match the id of the button being clicked, add it to the newPeople variable
    //setPeople with newPeople array
  };
  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>Remove</button>
          </div>
        );
      })}
      <button className="btn" onClick={() => setPeople([])}>
        {/* we need to use the arrow function b/c if not, setPeople will run 
        before the button is clicked. We don't want this. The function should only
        run once the button clicks which is but we use the arrow function here and above  */}
        Clear Items
      </button>
    </>
  );
};

export default UseStateArray;
