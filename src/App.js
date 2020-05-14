import React from 'react';
import {createBrowserHistory} from 'history';
import Menu from './components/Menu';

import menu from './menu.json'

import './App.css';
import {Switch, Router, Route} from 'react-router-dom'
import FNforbud from './components/TPNW/FNforbud';


function App() {

  const history = createBrowserHistory();

  console.log(history)

  return (
    <div className="App">
      
      <section className="fp-top">
        <h1>Lær om atomvåpen</h1>
        {/* <img id="fp-origami" src="./img/origami_andrevei.png" alt="origamifugl"></img> */}
      </section>
      
      <section className="fp-menu">
        <main>
          <div className="fp-menu">
          <Router history={history}>
      <Switch>
        <Route path='/' exact component={Menu}/>
        <Route path='/FNforbud' exact component={FNforbud}/>
      </Switch>
      </Router>
          </div>
        </main>
      </section>

      <section className="fp-timeline">
      <iframe title="timeline" src='https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1Zos4g950-sszhUcwZOEkVwFM7YYXfCq9TgVqC25EIk0&font=Georgia-Helvetica&lang=no&timenav_position=top&initial_zoom=1&height=500' width='100%' height='500' allowFullScreen frameBorder='0'></iframe>
      </section>


    </div>
  );
}

export default App;
