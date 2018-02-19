import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import { Container, Page, Form, SubmitButton } from './Form_style';
import axios from 'axios';
import { URL } from './../../Actions/Index';

import { setCookie } from './../../cookies';
import { withRouter } from 'react-router';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
        email: '',
        password: '',
    };
  }

  handleChange = ({ target: { name, value } }) => this.setState({ [name] : value });

  handleSubmit = (e) => {
    e.preventDefault();
     const request = axios.post(`${URL}/login`, this.state).then( (value) => {
       setCookie('token', `${value.data.token}`);
       const { protocol, host } = window.location;
       window.open(`${protocol}//${host}/invoices`, '_self');
     });
  }

  render() {
    return(
      <div>
        <Container zDepth={1}>
          <Page>
            <AppBar title="Logowanie" showMenuIconButton={false} zDepth={0} />
            <Form onSubmit={this.handleSubmit}>
              <TextField name="email" floatingLabelText="Email" value={this.state.email} onChange={this.handleChange} />
              <TextField name="password" type="password" floatingLabelText="Hasło" value={this.state.password} onChange={this.handleChange} />
              <SubmitButton type="submit" label="Zaloguj Się" primary={true} />
            </Form>
          </Page>
       </Container>
     </div>
        )
    }
};

 export default withRouter(Login);
