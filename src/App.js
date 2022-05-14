import React, {useState,useRef} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Cover from './Components/Cover/Cover';
import Frontend from './Components/Core/Dashboard/Frontend/Frontend';
import Backend from './Components/Core/Dashboard/Backend/Backend';
import FullStack from './Components/Core/Dashboard/FullStack/FullStack';
import './App.css';
function App() {
  const [signedIn, setSignedIn] = useState(false);
  const user = useRef({
    email: "admin@rats.com",
    password: "admin@rats"
  })
  return (
    <Router>
      <Navbar setSignedIn={setSignedIn} signedIn={signedIn} user={user}/>
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
      </Routes>

    </Router>
  );
}

export default App;
