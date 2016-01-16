require('expose?$!expose?jQuery!jquery');
require("bootstrap-webpack");

import './main.css';
import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App.jsx';

ReactDom.render(<App/>, document.getElementById('app'));