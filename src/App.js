import React from 'react';
import logo from './logo.svg';
import './App.css';
import './App.css';
import Home from './Components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import FavList from './Components/FavList/FavList';
import NavBar from './Components/Navbar/Navbar';



function App() {
  const appStyle = {
    backgroundColor: '#1f1f1f', 
    color: '#ffffff',
    minHeight: '100vh', 
    padding: '20px' 
  };
  return (
    <div style={appStyle}>
    <NavBar/>
    <Routes>
    <Route path='/' element={<Home/>}/> 
    <Route path='/favlist' element={<FavList/>}/> 
    </Routes>
    </div>
  );
}

export default App;
