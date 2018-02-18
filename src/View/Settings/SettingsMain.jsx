// React
import React, { Component } from 'react';
import { fetchUser, updateUser } from './../../Actions/Index';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
// Material-UI
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';

// Styled Components
import { Container, Page, Button } from './Main_style'

class SettingsMain extends Component {
  constructor(props) {
    console.log(props);
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

  componentWillMount(){
    this.props.fetchUser();
    console.log(this.props);
  }

  handleClickEdit = () => this.setState({
    data: {
      name: this.props.user.result.company.name,
      nip: `${this.props.user.result.company.nip}`,
      regon: `${this.props.user.result.company.regon}`,
      street: this.props.user.result.company.street,
      buildingNumber: `${this.props.user.result.company.buildingNumber}`,
      flatNumber: `${this.props.user.result.company.flatNumber}`,
      postalCode: this.props.user.result.company.postalCode,
      city: this.props.user.result.company.city,
    },
    disabledEdit: false,
    showSaveButton: true,
  });

  handleClickSave = () => {
    this.setState({ showSaveButton: false, disabledEdit: true });
    console.log(this.state.data);
    updateUser(this.state.data, () => this.props.fetchUser());
  }

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


    if (this.props.user.length === 0){
      return <div>Loading...</div>;
    }
    console.log(this.props.user.result);


    const { name, nip, regon, street, buildingNumber, flatNumber, postalCode, city } = this.props.user.result.company ? this.props.user.result.company : this.state.data;



    return(
      <div>
        <Container zDepth={1}>
          <Page>
            <AppBar title="Ustawienia" showMenuIconButton={false} zDepth={0} /> <br/>
            <TextField name='name' floatingLabelText='Nazwa Firmy' defaultValue={name} disabled={disabledEdit} onChange={ data => this.handleChange(data)}/> <br/>
            <TextField type='text' name='nip' floatingLabelText='NIP' defaultValue={nip} disabled={disabledEdit} onChange={ data => this.handleChange(data)}/> <br/>
            <TextField name='regon' floatingLabelText='Regon' defaultValue={regon} disabled={disabledEdit} onChange={ data => this.handleChange(data)}/> <br/>
            <TextField name='street' floatingLabelText='Ulica' defaultValue={street} disabled={disabledEdit} onChange={ data => this.handleChange(data)}/> <br/>
            <TextField name='buildingNumber' floatingLabelText='Numer budynku' defaultValue={buildingNumber} disabled={disabledEdit} onChange={ data => this.handleChange(data)}/> <br/>
            <TextField name='flatNumber' floatingLabelText='Numer lokalu' defaultValue={flatNumber} disabled={disabledEdit} onChange={ data => this.handleChange(data)}/> <br/>
            <TextField name='postalCode' floatingLabelText='Kod pocztowy' defaultValue={postalCode} disabled={disabledEdit} onChange={ data => this.handleChange(data)}/> <br/>
            <TextField name='city' floatingLabelText='Miasto' defaultValue={city} disabled={disabledEdit} onChange={ data => this.handleChange(data)}/> <br/>
            <Button label="EDYTUJ" floatingLabelText='siema' primary={true} onClick={this.handleClickEdit} onChange={ data => this.handleChange(data)}/>
            { showSaveButton && this.saveButton() }
          </Page>
        </Container>
      </div>
    );
  }
}
const SettingsMainWithRouter = withRouter(SettingsMain)

function mapStateToProps(state) {
  return { user: state.user };
}
export default connect(mapStateToProps, { fetchUser }) (SettingsMainWithRouter);
