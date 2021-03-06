import React from 'react';
import '.././css/main.css';
import{Provider} from 'react-redux';
import {configureStore} from '../store';
import Navbar from '../containers/Navbar';
import {BrowserRouter as Router} from 'react-router-dom';
import Main from './main';
import { setAuthorizationToken, setCurrentUser } from "../store/actions/auth";
import jwtDecode from "jwt-decode";



const store = configureStore();
if (localStorage.jwtToken) {
    setAuthorizationToken(localStorage.jwtToken);
    // prevent someone from manually tampering with the key of jwtToken in localStorage
    try {
      store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
    } catch (e) {
      store.dispatch(setCurrentUser({}));
    }
  }

  const  App = () => (
        <Provider store={store}> 
          <Router>
              <div className='app'>
                    <Navbar/>
                    <Main/>
              </div>
          </Router>
      </Provider> 

  );
  export default App;
