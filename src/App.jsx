import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactUs from './pages/ContactUs/index'


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element= {<ContactUs />} />
      </Routes>
    </Router>
  );
};

export default App;
