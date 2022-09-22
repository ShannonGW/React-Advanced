import React, { useState } from "react"; //named function we need to use {} and correct name

const UseStateBasics = () => {
  console.log(useState); //this shows up that useState is in fact a function
  console.log(useState()); //returns an undefined array and function
  //it's undefined because we need to pass a default value
  const [text, setText] = useState("random title");

  const handleClick = () => {
    setText("Hello World!");
  };
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className="btn" onClick={handleClick}>
        Change Title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;

//useState is basically a function coming from React
