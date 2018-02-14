// React
import React, { Component } from 'react';
import { getCookie } from './../../cookies';
import { fetchUser } from './../../Actions/Index';
import { connect } from 'react-redux';

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
        buildingNumber: '',
        flatNumber: '',
        postalCode: '',
        city: '',
      },
      disabledEdit: true,
      showSaveButton: false,
    }
  }

  componentDidMount(){
    this.props.fetchUser();
    console.log(this.props);
  }

  handleClickEdit = () => this.setState({ disabledEdit: false, showSaveButton: true });

  handleClickSave = () => this.setState({ showSaveButton: false, disabledEdit: true });

  saveButton = () => <Button label="ZAPISZ" secondary={true} onClick={this.handleClickSave} />;

  handleChange = (e) => {
    this.setState({
      data:{
        ...this.state.data,
        [e.target.name]: e.target.value
      }
      //
    });
  }




  render() {
    const { disabledEdit, showSaveButton } = this.state;
    console.log(this.props);

    if (this.props.user.length === 0){
      return <div>Loading...</div>;
    }

    return(
      <div>
        <Container zDepth={1}>
          <Page>
            <AppBar title="Ustawienia" showMenuIconButton={false} zDepth={0} /> <br/>
            <TextField name='name' floatingLabelText='Nazwa Firmy' defaultValue={this.props.user.result.companyName} disabled={disabledEdit} onChange={ data => this.handleChange(data)}/> <br/>
            <TextField name='nip' floatingLabelText='NIP' defaultValue={this.props.user.result.nip} disabled={disabledEdit} onChange={ data => this.handleChange(data)}/> <br/>
            <TextField name='regon' floatingLabelText='Regon' defaultValue={this.props.user.result.regon} disabled={disabledEdit} onChange={ data => this.handleChange(data)}/> <br/>
            <TextField name='street' floatingLabelText='Ulica' defaultValue={this.props.user.result.street} disabled={disabledEdit} onChange={ data => this.handleChange(data)}/> <br/>
            <TextField name='buildingNumber' floatingLabelText='Numer budynku' defaultValue={this.props.user.result.buildingNumber} disabled={disabledEdit} onChange={ data => this.handleChange(data)}/> <br/>
            <TextField name='flatNumber' floatingLabelText='Numer lokalu' defaultValue={this.props.user.result.flatNumber} disabled={disabledEdit} onChange={ data => this.handleChange(data)}/> <br/>
            <TextField name='postalCode' floatingLabelText='Kod pocztowy' defaultValue={this.props.user.result.postalCode} disabled={disabledEdit} onChange={ data => this.handleChange(data)}/> <br/>
            <TextField name='city' floatingLabelText='Miasto' defaultValue={this.props.user.result.city} disabled={disabledEdit} onChange={ data => this.handleChange(data)}/> <br/>
            <Button label="EDYTUJ" floatingLabelText='siema' primary={true} onClick={this.handleClickEdit} onChange={ data => this.handleChange(data)}/>
            { showSaveButton && this.saveButton() }
          </Page>
        </Container>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { user: state.user };
}
export default connect(mapStateToProps, { fetchUser }) (SettingsMain);
