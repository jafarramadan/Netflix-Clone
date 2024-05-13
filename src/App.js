import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import FavList from './Components/FavList/FavList';
import NavBar from './Components/Navbar/Navbar';



function App() {
  return (
    <>
    <NavBar/>
    <Routes>
    <Route path='/' element={<Home /> }/> 
    <Route path='/favlist' element={<FavList /> }/> 
    </Routes>
    </>
  );
}

export default App;
