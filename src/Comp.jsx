import React, { useContext } from "react";
import  {MyContext}  from "./main"; // Import MyContext from main.js

const MyComponent = () => {
  const myContextValue = useContext(MyContext);

  return (
    <div>
      <p>Value from context: {myContextValue}</p>
    </div>
  );
};

export default MyComponent;
