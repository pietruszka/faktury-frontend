import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import { Container, Page, Form, SubmitButton } from './Form_style';
import axios from 'axios';


import { setCookie } from './../../cookies';
import { withRouter } from 'react-router';

class Login extends Component {
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
    e.preventDefault();
     const request = axios.post(`http://localhost:3005/api/login`, this.state).then( (value) => {
       setCookie('token', `${value.data.token}`);
       this.props.history.push('/invoices');
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
const LoginWithRouter = withRouter(Login)


 export default LoginWithRouter;
