import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import { Container, Page, Form, Button, SubmitButton } from './Form_style';

import { setCookie } from './../../cookies';
import { registerUser } from './../../Actions/Index';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
        email: '',
        password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
   this.setState({ [event.target.name] : event.target.value });
  }

  handleSubmit(e) {
    console.log(this.state);
    e.preventDefault();
    registerUser(this.state);
  }

  render() {
    return(
      <div>
        <Container zDepth={1}>
          <Page>
            <AppBar title="Rejestracja" showMenuIconButton={false} zDepth={0} />
              <Form onSubmit={this.handleSubmit}>
                <TextField name="email" value={this.state.email} onChange={this.handleChange} floatingLabelText="E-mail" />
                <TextField name="password" value={this.state.password} onChange={this.handleChange} type="password" floatingLabelText="Hasło" />
                <SubmitButton type="submit" label="Zarejestruj Się" primary={true} />
              </Form>
          </Page>
       </Container>
     </div>
        )
    }
};
