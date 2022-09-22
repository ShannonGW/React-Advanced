import React from "react";

const ErrorExample = () => {
  let title = "random title ";
  const handleClick = () => {
    title = "hello people";
    console.log(title);
  };
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        Change title
      </button>
    </React.Fragment>
  );
};
//the title "random title" does not update to "hello people" because it needs to be re-rendered in the function.
//useState allows us to make that update
export default ErrorExample;
