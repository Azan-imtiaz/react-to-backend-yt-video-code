import React, { useState } from "react";

const Forms = () => {
  const [val, setVal] = useState({
    name: "",
    aridNo: "",
    section: "",
    marks: "",
  });
  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setVal(() => {
      return { ...val, [name]: value };
    });
  }
  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:5000/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Set the content type
      },
      body: JSON.stringify(val), // Convert the form data to JSON
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Arid No already exists");
        }
        return response.json(); // Parse the response as JSON
      })
      .then((data) => {
        // Handle the response from the backend
        alert(`Form data submitted successfully! ${data.message}`);
      })
      .catch((error) => {
        // Handle errors
        alert(`An error occurred while submitting the form data.${error}`);
      });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <br />
        <br />
        <input
          type="text"
          name="name"
          required
          value={val.name}
          placeholder="Enter Name"
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          type="text"
          name="aridNo"
          value={val.aridNo}
          placeholder="Enter AridNo"
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          type="text"
          name="section"
          value={val.section}
          placeholder="Enter Section"
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          type="text"
          name="marks"
          value={val.marks}
          placeholder="Enter Marks"
          onChange={handleChange}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    
    </div>
  );
};

export default Forms;
