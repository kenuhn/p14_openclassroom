import React from 'react'
import { Routes, Route} from 'react-router-dom' 
import Header from './components/header/header.js'
import Home from './pages/home'
import Employe from './pages/Employe.js'


function App() {
  return (
    <div className="App">
      <Header /> 
      <Routes >
            <Route path="/" element={ <Home />} />
            <Route path="/Employe" element={ <Employe />} />
      </Routes>
    
    </div>
  );
}

export default App;
