import React, { useEffect, useState } from "react";

const Display = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/getData", {
      method: "GET",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((responseData) => {
        setData(responseData);
      })
      .catch((error) => {
        console.log(`An error occurred while fetching the data. ${error}`);
      });
  }, []);

  return (
    <div>
      <h1>Data Display</h1>

      {data.length > 0 ? (
        <ul>
          {data.map((item, index) => {
            return (
              <li key={index}>
                <p>Name: {item.name}</p>
                <p>AridNo: {item.AridNo}</p>
                <p>Section: {item.Section}</p>
                <p>Marks: {item.Marks}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default Display;
