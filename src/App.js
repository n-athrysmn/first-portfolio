import './App.css'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navbar/Navibar'
import Header from './components/header/Header'
import Profile from './components/profile/Profile'
import Projects from './components/projects/Projects'
import Contacts from './components/contacts/Contacts'
import Footer from './components/footer/Footer'


function App() {
  return (
    <>
        <NavBar/>
        <Header/>
        <Profile/>
        <Projects/>
        {/* <Contacts/> */ }
        <Footer/>
    </>
  );
}

export default App
