import React from 'react';
import './App.css';
import Header from "./header/Header";
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";
import Projects from "./projects/Projects";
import Testonominals from "./testonominals/Testonominals";
import Contacts from "./contacts/Contacts";

function App() {
  return (
    <div className="App">
        <Header/>
        <Main/>
        <Skills/>
        <Projects/>
        <Testonominals/>
        <Contacts/>
    </div>
  );
}

export default App;
