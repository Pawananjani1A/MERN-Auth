// jshint esversion:6

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route,Redirect, Switch} from 'react-router-dom';
import Register from "./screens/Register.jsx";
import Activate from './screens/Activate.jsx';
import Login from "./screens/Login.jsx";
import ForgetPassword from './screens/ForgetPassword';
import ResetPassword from './screens/ResetPassword';
import App from './App';


ReactDOM.render(
   <BrowserRouter>
     <Switch>
     <Route path='/' exact render={props => <App {...props} />} />
     <Route path='/login' exact render={props => <Login {...props} />} /> 
      <Route path='/register' exact render={props => <Register {...props} />} />
      <Route path='/users/activate/:token' exact render={props => <Activate {...props} />} />\
      <Route path='/users/password/forget' exact render={props => <ForgetPassword {...props} />} />
       <Route path='/users/password/reset/:token' exact render={props => <ResetPassword {...props} />} />
     </Switch>
   </BrowserRouter>,
  document.getElementById('root')
);


