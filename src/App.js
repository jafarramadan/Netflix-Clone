import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <Routes>
    <Route path='/' element={<Home /> }/> 
    </Routes>
  );
}

export default App;
