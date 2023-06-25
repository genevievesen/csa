import React from 'react';

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, Mountains, } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <Mountains />
    {/* <Chef />
    <Intro />
    <Laurels />
    <Gallery /> */}
    <FindUs />
    <Footer />
  </div>
);

export default App;
