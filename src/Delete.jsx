import React, { useState } from "react";

const Delete = () => {
  const [val, setVal] = useState(null);
  function handleChange(e) {
    setVal(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(val);
    fetch("http://localhost:5000/deleteUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ aridNo: val }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("No user exists with this AridNo");
        }
        return response.json(); // Corrected: Return the parsed JSON
      })
      .then((data) => {
        console.log(data);
        alert(data);
      })
      .catch((err) => {
        alert(err);
      });
  }

  function deleteAll() {
    fetch("http://localhost:5000/deleteAllUsers", {
      method: "POST",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json(); // If you expect JSON response
      })
      .then((responseData) => {
        // Handle the response data here
        console.log(responseData);
        alert(responseData.message);
      })
      .catch((error) => {
        console.error("An error occurred:", error);
        alert(error);
      });
  }

  return (
    <div>
      <h1>delete page</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={val}
          name="aridNo"
          placeholder="Enter Arid No"
          onChange={handleChange}
        />
        <button
          type="submit"
          style={{ color: "green", padding: "5px", marginLeft: "7px" }}
        >
          Delete
        </button>
      </form>
      <br />
      <br />
      <button style={{ color: "Red", padding: "10px" }} onClick={deleteAll}>
        Delete All
      </button>

    </div>
  );
};

export default Delete;
