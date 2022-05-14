import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cover from './Components/Cover/Cover';
import Frontend from './Components/Core/Dashboard/Frontend/Frontend';
import Backend from './Components/Core/Dashboard/Backend/Backend';
import FullStack from './Components/Core/Dashboard/FullStack/FullStack';

function App() {
  return (
    <Router>
      <Navbar/>

      <Routes>
        <Route exact path="/" element={<Cover/>} />
        <Route exact path="/frontend" element={<Frontend/>} />
        <Route exact path="/backend" element={<Backend/>} />
        <Route exact path="/fullstack" element={<FullStack/>} />
      </Routes>

    </Router>
  );
}

export default App;
