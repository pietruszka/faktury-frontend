// React
import React, { Component, Fragment } from 'react';
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
    data: this.props.user.result.company,
    disabledEdit: false,
    showSaveButton: true,
  });

  handleClickSave = () => {
    this.setState({ showSaveButton: false, disabledEdit: true });
    console.log(this.state.data);
    updateUser(this.state.data, () => this.props.fetchUser());
  }

  handleChange = (e) => {
    this.setState({
      data:{
        ...this.state.data,
        [e.target.name]: e.target.value
      }
      //
    });
  }

  Field = ({ name, label, defaultValue }) => (
    <Fragment>
      <TextField
        name={name}
        floatingLabelText={label}
        defaultValue={defaultValue}
        disabled={this.state.disabledEdit}
        onChange={data => this.handleChange(data)}
      />
      <br />
    </Fragment>
  );

  render() {
    const { disabledEdit, showSaveButton } = this.state;


    if (this.props.user.length === 0){
      return <div>Loading...</div>;
    }
    console.log(this.props.user.result);


    const { name, nip, regon, street, buildingNumber, flatNumber, postalCode, city } = this.props.user.result.company;
    const { Field } = this;

    return(
      <div>
        <Container zDepth={1}>
          <Page>
            <AppBar title="Ustawienia" showMenuIconButton={false} zDepth={0} /> <br/>
            <Field name="name" label="Nazwa Firmy" defaultValue={name} />
            <Field name="nip" label="NIP" defaultValue={nip} />
            <Field name="regon" label="Regon" defaultValue={regon} />
            <Field name="street" label="Ulica" defaultValue={street} />
            <Field name="buildingNumber" label="Numer budynku" defaultValue={buildingNumber} />
            <Field name="flatNumber" label="Numer lokalu" defaultValue={flatNumber} />
            <Field name="postalCode" label="Kod pocztowy" defaultValue={postalCode} />
            <Field name="city" label="Miasto" defaultValue={city} />
            <Button label="Edytuj" primary={true} onClick={this.handleClickEdit} onChange={ data => this.handleChange(data)}/>
            { showSaveButton && <Button label="Zapisz" secondary={true} onClick={this.handleClickSave} /> }
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
