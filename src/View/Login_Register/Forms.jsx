// React
import React, { Component } from 'react';
import Login from './Login';
import Register from './Register';
// React Router
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// Material UI
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';

// Styled Components
import { Container, Page, Form, Button, SubmitButton } from './Form_style';

import { setCookie } from './../../cookies';

const Forms = () => (
  <Router>
      <div>
        <Container>
        <Link to="/login"><Button label="Logowanie" primary={true} /></Link>
        <Link to="/register"><Button label="Rejestracja" secondary={true} /></Link>
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
        </Container>
      </div>
  </Router>
)

export default Forms;
