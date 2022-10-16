import React from 'react';
import './App.css';
import {Projects} from "./projects/Projects";
import {Contacts} from "./contacts/Contacts";
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";
import {Resume} from './resume/Resume';
import {Header} from './header/Header';

function App() {
  return (
    <div className="App">
        <Header/>
        <Main/>
        <Resume/>
        <Skills/>
        <Projects/>
        {/*<Testonominals/>*/}
        <Contacts/>
    </div>
  );
}

export default App;
