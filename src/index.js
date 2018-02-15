// React
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { getCookie } from './cookies';
// Styles
import './global.css';

// Main Home View
import Homeview from './View/Home';
import Forms from './View/Login_Register/Forms';
// Service Worker
import registerServiceWorker from './registerServiceWorker';
import reducers from './Reducers';
import promise from 'redux-promise';

// Material-UI
import {indigo700, pinkA400 } from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);


const muiTheme = getMuiTheme({
  palette: {
    primary1Color: indigo700,
    accent1Color: pinkA400,
  },
});

class App extends Component {

  render(){
    const token = getCookie('token');
    console.log(token);
    return (
      <Provider store={createStoreWithMiddleware(reducers)}>
        <MuiThemeProvider muiTheme={muiTheme}>
          {token ? (
            <Homeview />
          ) : (
            <Forms />
          )}
        </MuiThemeProvider>
      </Provider>
  );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
registerServiceWorker();
