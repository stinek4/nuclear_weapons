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
      <Router history={history} basename='/'>
        <Switch> 
          <Route path='Laer-om-atomvaapen/FNforbud' exact component={FNforbud}/>
          <Route path='/' component={Menu}/>
          <Route path='Laer-om-atomvaapen/Humanitarian' exact component={Humanitarian}/>
          <Route path='Laer-om-atomvaapen/HvaErNW' exact component={HvaErNW}/>
          <Route path='Laer-om-atomvaapen/NWCost' exact component={NWCost}/>
          <Route path='Laer-om-atomvaapen/CitiesAppeal' exact component={CitiesAppeal}/>
          <Route path='Laer-om-atomvaapen/Climate' exact component={Climate}/>
        </Switch> 
      </Router>
          </div>
        </main>
      </section>



    </div>
  );
}

export default App;
