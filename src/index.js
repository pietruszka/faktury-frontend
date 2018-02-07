import React from 'react';
import ReactDOM from 'react-dom';
import './global.css';
import Home from './View/Home';
import registerServiceWorker from './registerServiceWorker';

// Material-UI 
import {indigo700, pinkA400 } from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: indigo700,
    accent1Color: pinkA400,
  },
});

const App = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <Home />
  </MuiThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();