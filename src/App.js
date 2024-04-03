import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LoginForm from './Components/LoginForm/LoginForm';
import HomePage from './Components/HomePage/HomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />}></Route>
        <Route path="/home-page" element={<HomePage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
