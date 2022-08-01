import React from 'react';
import './App.css';
import Header from "./header/Header";
import Projects from "./projects/Projects";
import Testonominals from "./testonominals/Testonominals";
import Contacts from "./contacts/Contacts";
import Footer from "./footer/Footer";
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";

function App() {
  return (
    <div className="App">
        <Header/>
        <Main/>
        <Skills/>
        <Projects/>
        <Testonominals/>
        <Contacts/>
        <Footer/>
    </div>
  );
}

export default App;
