import React from 'react';
import {Helmet} from 'react-helmet'

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Helmet>
      <meta charSet='utf-8'/>
      <title>Cycloxx Energy™</title>
      <meta name='Industry leader in oil and gas distribution'content='Cycloxx Energy'/>
    </Helmet>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Intro />
    <Laurels />
    <Gallery />
    <FindUs />
    <Footer />
  </div>
);

export default App;
