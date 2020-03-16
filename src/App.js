import React, {
  BrowserRouter, Route, Link, Redirect
} from 'react';

import logo from './logo.svg';
import './App.css';
import LoginScreen from './screens/login'

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Redirect from='/' to='./signin' exact/>
          
          <Route path='/signin'>
            <LoginScreen/>
          </Route>

          <Route path='/signup'>
            <LoginScreen/>
          </Route>
        </BrowserRouter>
    </div>
  );
}

export default App;
