import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    // name: "Shannon",
    // age: 28,
    // message: "random message",
  });

  const [name, setName] = useState("Shannon");
  const [age, setAge] = useState(28);
  const [message, setMessage] = useState("random message");

  const changeMessage = () => {
    // setPerson({ ...person, message: "Hello!" });
    //use spread operator so that name and age dont change, just message
    setMessage("Hello world!");
  };

  return (
    <>
      <h3> {name}</h3>
      <h3> {age}</h3>
      <h3> {message}</h3>
      <button className="btn" onClick={changeMessage}>
        Change Message
      </button>
    </>
  );
};

export default UseStateObject;
