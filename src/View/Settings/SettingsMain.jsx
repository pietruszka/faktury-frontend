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
  }

  handleClickEdit = () => this.setState({ disabledEdit: false, showSaveButton: true });

  handleClickSave = () => this.setState({ showSaveButton: false, disabledEdit: true });

  saveButton = () => <Button label="ZAPISZ" secondary={true} onClick={this.handleClickSave} />;

  render() {
    const { disabledEdit, showSaveButton } = this.state;

    return(
      <div>
        <Container zDepth={1}>
          <Page>
            <AppBar title="Ustawienia" showMenuIconButton={false} zDepth={0} /> <br/>
            <TextField hintText="Nazwa firmy" disabled={disabledEdit}/> <br/>
            <TextField hintText="NIP" disabled={disabledEdit}/> <br/>
            <TextField hintText="REGON" disabled={disabledEdit}/> <br/>
            <TextField hintText="Ulica" disabled={disabledEdit}/> <br/>
            <TextField hintText="Numer budynku" disabled={disabledEdit}/> <br/>
            <TextField hintText="Numer lokalu" disabled={disabledEdit}/> <br/>
            <TextField hintText="Kod pocztowy" disabled={disabledEdit}/> <br/>
            <TextField hintText="Miasto" disabled={disabledEdit}/> <br/>
            <Button label="EDYTUJ" primary={true} onClick={this.handleClickEdit} />
            { showSaveButton && this.saveButton() }
          </Page>
        </Container>
      </div>
    );
  }
}

export default SettingsMain;
