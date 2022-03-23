import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Navbar from './components/navbar';
import Signup from './components/signup';
import Signin from './components/signin';

function App() {
  return (
    <React.Fragment>

      <header>
        <Navbar />
      </header>

      <main style={{nimHeight: 900}}>
        <Routes>
          <Route path='/' element = {<Home/>} />
          <Route path='/about/:about_who' element = {<About/>} />
          <Route path='/signup' element = {<Signup/>} />
          <Route path='/signin' element = {<Signin/>} />
        </Routes>
      </main>

      {/* <footer>
        <Footer />
      </footer> */}

    </React.Fragment>
  );
}

export default App;

// inside the main Tag we will use react-router-dom to define our home page display.
