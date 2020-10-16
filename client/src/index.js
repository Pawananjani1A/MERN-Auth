// jshint esversion:6

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route,Redirect, Switch} from 'react-router-dom';
import Register from "./screens/Register";
import Activate from './screens/Activate.jsx';
import App from './App';


ReactDOM.render(
   <BrowserRouter>
     <Switch>
     <Route path='/' exact render={props => <App {...props} />} />
      <Route path='/register' exact render={props => <Register {...props} />} />
      <Route path='/users/activate/:token' exact render={props => <Activate {...props} />} />
     </Switch>
   </BrowserRouter>,
  document.getElementById('root')
);


