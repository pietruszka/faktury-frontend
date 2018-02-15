import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import { Container, Page, Form, Button, SubmitButton } from './Form_style';

import { connect } from 'react-redux';
import { loginUser } from './../../Actions/Index';


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
    console.log(this.state);
    e.preventDefault();
    this.props.loginUser(this.state);
    // this.props.history.push('/invoices');
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

function mapStateToProps(state) {
  return { login: state.login };
}
 export default connect(mapStateToProps, { loginUser }) (Login);
