// React
import React, { Component } from 'react';

// React Router
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// Material UI
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';

// Styled Components
import { Container, Page, Form, Button, SubmitButton } from './Form_style';

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

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
        login: '',
        password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
    
  handleChange(event) {
   this.setState({ [event.target.name] : event.target.value });
}

  handleSubmit(e) {
    alert(`Login: ${this.state.login} Hasło: ${this.state.password}`);
    e.preventDefault();
  }
    
  render() {
    return(
      <div>
        <Container zDepth={1}>
          <Page>
            <AppBar title="Logowanie" showMenuIconButton={false} zDepth={0} />
            <Form onSubmit={this.handleSubmit}>
              <TextField name="login" floatingLabelText="Login" value={this.state.login} onChange={this.handleChange} />
              <TextField name="password" type="password" floatingLabelText="Hasło" value={this.state.password} onChange={this.handleChange} />
              <SubmitButton type="submit" label="Zaloguj Się" primary={true} />
            </Form>
          </Page>
       </Container>
     </div>
        )
    }
};

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
        email: '',
        login: '',
        password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
    
  handleChange(event) {
   this.setState({ [event.target.name] : event.target.value });
  }

  handleSubmit(e) {
    alert(`Email: ${this.state.email} Login: ${this.state.login} Hasło: ${this.state.password}`);
    e.preventDefault();
  }
    
  render() {
    return(
      <div>
        <Container zDepth={1}>
          <Page>
            <AppBar title="Rejestracja" showMenuIconButton={false} zDepth={0} />
              <Form onSubmit={this.handleSubmit}>
                <TextField name="email" value={this.state.email} onChange={this.handleChange} floatingLabelText="E-mail" />
                <TextField name="login" value={this.state.login} onChange={this.handleChange} floatingLabelText="Login" />
                <TextField name="password" value={this.state.password} onChange={this.handleChange} type="password" floatingLabelText="Hasło" />
                <SubmitButton type="submit" label="Zarejestruj Się" primary={true} />
              </Form>    
          </Page>
       </Container>
     </div>
        )
    }
};

export default Forms;
