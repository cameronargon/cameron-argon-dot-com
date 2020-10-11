import React from "react";
import logo from "./logo.svg";
import "./App.css";
import DisfiguringTheGoddess, {
  DtgBio,
} from "./components/DisfiguringTheGoddess/DisfiguringTheGoddess";
import BigChocolate from "./components/BigChocolate/BigChocolate";
import Header from "./components/Header/Header";
import Chopped from "./components/Chopped/Chopped";
import DjMixes from "./components/DjMixes/DjMixes";
import Contact from "./components/Contact/Contact";
import { Link, animateScroll as scroll } from "react-scroll";


function App() {
  return (
    <>
      <main className="main-header">
        <h1>CAMERON ARGON DOT COM</h1>
      </main>
      <div className="header-css">
        <Header />
      </div>
      <div className="main-guts">
        <BigChocolate />
        <DisfiguringTheGoddess />
        <DjMixes />
        <Chopped />
        <Contact/>
      </div>
    </>
  );
}

export default App;
