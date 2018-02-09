import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import './global.css';
import Home from './View/Home';
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

const App = () => (
  <Provider store={createStoreWithMiddleware(reducers)}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <Home />
    </MuiThemeProvider>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
