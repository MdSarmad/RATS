import React, {useContext} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RatsContext from './Context/RatsContext';
import Navbar from './Components/Navbar/Navbar';
import Cover from './Components/Cover/Cover';
import Frontend from './Components/Core/Dashboard/Frontend/Frontend';
import Backend from './Components/Core/Dashboard/Backend/Backend';
import FullStack from './Components/Core/Dashboard/FullStack/FullStack';
import './App.css';
function App() {
  const {signedIn} = useContext(RatsContext);
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Cover />} />
        { signedIn 
          ?
          <>
            <Route exact path="/frontend" element={<Frontend/>} />
            <Route exact path="/backend" element={<Backend/>} />
            <Route exact path="/fullstack" element={<FullStack/>} />
          </>
          :null
        }
        <Route path="*" element={<Cover/>} />
      </Routes>
    </Router>
  );
}

export default App;
