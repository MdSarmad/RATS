import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cover from './Components/Cover/Cover';

function App() {
  return (
    <Router>
      <Navbar/>

      <Routes>
        <Route exact path="/" element={<Cover/>} />
      </Routes>

    </Router>
  );
}

export default App;
