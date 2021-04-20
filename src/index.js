import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import Intro from './Components/Intro'
import Img_Reg from './Components/Img_Reg'
import Vid_Reg from './Components/Vid_Reg'
import Live_Reg from './Components/Live_Reg'
import Contact from './Components/Contact'

ReactDOM.render(
  <React.StrictMode>
    <Intro />
    <hr />
    <Img_Reg/>
    <Vid_Reg />
    <Live_Reg />
    <hr />
    <Contact />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
