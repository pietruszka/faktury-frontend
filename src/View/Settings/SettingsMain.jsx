// React
import React, { Component } from 'react';

// Material-UI
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';

// Styled Components
import { Container, Page, Button } from './Main_style'

class SettingsMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        name: '',
        nip: '',
        regon: '',
        street: '',
        adress1: '',
        adress2: '',
        code: '',
        city: '', 
      },
      disabledEdit: true,
      showSaveButton: false,
    }
    
    this.handleClickEdit = this.handleClickEdit.bind(this);
    this.handleClickSave = this.handleClickSave.bind(this);
    this.saveButton = this.saveButton.bind(this);
  }
    
  handleClickEdit() {
    this.setState({disabledEdit: false, showSaveButton: true});
  }
    
  handleClickSave() {
    this.setState({showSaveButton: false, disabledEdit: true});
  }
    
  saveButton() {
    return(<Button label="ZAPISZ" secondary={true} onClick={this.handleClickSave} />);
  }
    
  render() {
    return(
      <div>
        <Container zDepth={1}>
          <Page>
            <AppBar title="Ustawienia" showMenuIconButton={false} zDepth={0} /> <br/>
            <TextField hintText="Nazwa firmy" disabled={this.state.disabledEdit}/> <br/>
            <TextField hintText="NIP" disabled={this.state.disabledEdit}/> <br/>
            <TextField hintText="REGON" disabled={this.state.disabledEdit}/> <br/>
            <TextField hintText="Ulica" disabled={this.state.disabledEdit}/> <br/>
            <TextField hintText="Numer budynku" disabled={this.state.disabledEdit}/> <br/>
            <TextField hintText="Numer lokalu" disabled={this.state.disabledEdit}/> <br/>
            <TextField hintText="Kod pocztowy" disabled={this.state.disabledEdit}/> <br/>
            <TextField hintText="Miasto" disabled={this.state.disabledEdit}/> <br/>
            <Button label="EDYTUJ" primary={true} onClick={this.handleClickEdit} />
            { this.state.showSaveButton ? this.saveButton() : null }
          </Page>
        </Container>
      </div>
    );
  }
}

export default SettingsMain;
