import React from 'react';
import {Router, IndexRoute} from 'react-router';
import App from './App'
import Menu from './components/Menu'
import FNForbud from './components/TPNW/FNforbud'

export default (
    <Router path="/" component={App}>
        <IndexRoute component={Menu}/>
        <Router component={FNForbud}/>
    </Router>
)