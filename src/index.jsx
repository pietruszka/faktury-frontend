// React
import React from 'react';
import ReactDOM from 'react-dom';

// React Router
import Route from 'react-router-dom/Route';
import Router from 'react-router-dom/Router';
import createBrowserHistory from 'history/createBrowserHistory';
import Switch from 'react-router-dom/Switch';

// Material UI
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

// WebFont Loader
import WebfontLoader from '@dr-kobros/react-webfont-loader';

// Redux
import Provider from 'react-redux/lib/components/Provider';
import applyMiddleware from 'redux/lib/applyMiddleware';
import createStore from 'redux/lib/createStore';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';

// Views
import Index from './views/Index/Index';
import Home from './views/Home/Home';

// Main styles import.
import './scss/global.scss';

// Color palette import.
import { colors } from './utils/styles';

// Middleware
/* eslint-disable no-underscore-dangle */
const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);
const store = createStoreWithMiddleware(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */

const muiTheme = createMuiTheme({
  palette: {
    primary: colors.MUIprimary,
    secondary: colors.MUIsecondary,
  },
});

// WebFont Loader configuration.
const config = {
  google: {
    families: ['Roboto:300,400,500,900:latin,latin-ext'],
  },
};

const customHistory = createBrowserHistory();

ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <WebfontLoader config={config}>
      <Provider store={store}>
        <Router history={customHistory}>
          <Index>
          <h1>Faktury</h1>
            <Switch>
              <Route path="/" component={Home} />
            </Switch>
          </Index>
        </Router>
      </Provider>
    </WebfontLoader>
  </MuiThemeProvider>,
  document.querySelector('.container'),
);
