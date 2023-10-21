import React from 'react';

import { AboutUs, Footer, Header, Mountains, Members} from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <Mountains />
    <Members />
    <Footer />
  </div>
);

export default App;
