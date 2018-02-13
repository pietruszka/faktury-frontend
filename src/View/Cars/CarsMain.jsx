// React
import React, { Component } from 'react';
import { connect } from 'react-redux';

import AddCarForm from './AddCar2/AddCar2';
// Material-UI
import AppBar from 'material-ui/AppBar';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';

// Styled Components
import { Container, Page, Button } from './Main_style'

import { AddCar } from './AddCar'
import { fetchUser } from './../../Actions/Index';
import { getCookie } from './../../cookies';

class CarsMain extends Component {

  componentDidMount(){
    const user = getCookie('id');
    console.log(user);
    this.props.fetchUser(user);
  }

  handleClickEdit() {
      if (this.state.allowEdit == false) {
        this.setState({allowEdit: true});
      } else {
        this.setState({allowEdit: false});
      }
  }

  deleteCar(register_number){
    console.log(register_number);
    const arr = this.props.user[0].vehicle.filter(v => v.register_number !== register_number);
    console.log(arr);
  }


  renderVehicles = ({ register_number, name, type, owner }, i) => {

    return(
      <TableRow key={register_number}>
        <TableRowColumn>{name}</TableRowColumn>
        <TableRowColumn>{register_number}</TableRowColumn>
        <TableRowColumn>{type}</TableRowColumn>
        <TableRowColumn>{owner}</TableRowColumn>
        <TableRowColumn><RaisedButton onClick={() => this.deleteCar(register_number)} label="Usuń" secondary={true} /></TableRowColumn>
      </TableRow>
    );
  }

  render() {
    console.log(this.props);
    if (this.props.user.length === 0){
      return <div>Loading...</div>;
    }
    return(

      <div>
        <Container zDepth={1}>
          <Page>
            <AppBar title="Pojazdy" showMenuIconButton={false} zDepth={0} />

            <AddCar user={this.props.user} />

            <Table>
              <TableHeader displaySelectAll={false}>
                <TableRow>
                  <TableHeaderColumn>Nazwa</TableHeaderColumn>
                  <TableHeaderColumn>Numer rejestracyjny</TableHeaderColumn>
                  <TableHeaderColumn>Typ</TableHeaderColumn>
                  <TableHeaderColumn>Właściciel</TableHeaderColumn>
                  <TableHeaderColumn>Usuń</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody displayRowCheckbox={false} >
                {this.props.user[0].vehicle.map(this.renderVehicles)}
              </TableBody>
            </Table>
          </Page>
        </Container>
      </div>

    );
  }
}
function mapStateToProps(state) {
  return { user: state.user, form: state.form.AddCarForm };
}
 export default connect(mapStateToProps, { fetchUser }) (CarsMain);
