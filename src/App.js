import React from 'react';
import {createBrowserHistory} from 'history';
import {Switch, Router, Route} from 'react-router-dom'

import Menu from './components/Menu';
import FNforbud from './components/TPNW/FNforbud';
import Humanitarian from './components/Humanitarian/Humanitarian';
import NWCost from './components/Cost/NWCost';
import CitiesAppeal from './components/IcanSave/CitiesAppeal';
import Climate from './components/ClimateNW/Climate';
import HvaErNW from './components/WINW/HvaErNW'
import AOS from 'aos';


import './App.css';

function App() {

  const history = createBrowserHistory();

  console.log(history)

  AOS.init({
    duration: 1500
  });
  return (
    <div className="App">
      
      <section className="fp-top">
        <h1>Fakta om atomvåpen</h1>
      </section>
      
      <section className="fp-menu">
        <main>
          <div className="fp-menu">
      <Router history={history} basename='/Laer-om-atomvaapen'>
        <Switch> 
          <Route path='/FNforbud' exact component={FNforbud}/>
          <Route path='/' component={Menu}/>
          <Route path='/Humanitarian' exact component={Humanitarian}/>
          <Route path='/HvaErNW' exact component={HvaErNW}/>
          <Route path='/NWCost' exact component={NWCost}/>
          <Route path='/CitiesAppeal' exact component={CitiesAppeal}/>
          <Route path='/Climate' exact component={Climate}/>
        </Switch> 
      </Router>
          </div>
        </main>
      </section>



    </div>
  );
}

export default App;
