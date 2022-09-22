import React, { useState } from "react"; //named function we need to use {} and correct name

// all hooks start with 'use'
//component name must be uppercase
//must be in the function/component body
//cannot call conditionally

const UseStateBasics = () => {
  console.log(useState); //this shows up that useState is in fact a function
  console.log(useState()); //returns an undefined array and function
  //it's undefined because we need to pass a default value
  const [text, setText] = useState("random title");

  const handleClick = () => {
    if (text === "random title") {
      setText("Hello World!");
    } else {
      setText("random title");
    }
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
