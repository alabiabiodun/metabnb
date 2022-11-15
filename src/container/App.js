import React from 'react'
import { HomePage } from '../components/HomePage'
import Places from '../components/Places';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<HomePage />} exact/>
            <Route path="/place-to-stay" element={<Places />} exact/>                
        </Routes>    
    </Router>           
)
}

export default App
