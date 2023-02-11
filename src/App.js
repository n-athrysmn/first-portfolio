import './App.css'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navbar/Navibar'
import Header from './components/header/Header'
import Projects from './components/projects/Projects'


function App() {
  return (
    <>
        <NavBar/>
        <Header/>
        <Projects/>
    </>
  );
}

export default App
