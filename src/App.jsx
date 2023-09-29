import React from 'react';
import Home from './Home';
import Form from './Forms';
import Card from './Cards';
import Display from './Display';
import Delete from './Delete';
import { Link, Routes, Route } from 'react-router-dom';


const App = () => {

    return (
    <div >
<div style={{display:"flex",justifyContent:"space-evenly"}}>
      {/* <Link to="/">Home</Link> */}
      <Link to="/">Form</Link>
      {/* <Link to="/card">Card</Link> */}
      <Link to="/display">Display</Link>
      <Link to="/delete">Delete</Link>
   </div> 
  <Routes>
  <Route path="/" element={<Form />} />
  <Route path="/card" element={<Card />} />
  <Route path="/display" element={<Display />} />
  <Route path="/delete" element={<Delete />} />
</Routes>
    </div>
    
  );
  
};

export default App;
