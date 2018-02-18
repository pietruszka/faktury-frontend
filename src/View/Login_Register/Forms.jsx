// React
import React from 'react';
import Login from './Login';
import Register from './Register';
// React Router
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


// Styled Components
import { Container, Button } from './Form_style';


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
