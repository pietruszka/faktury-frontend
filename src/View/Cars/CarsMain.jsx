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


class CarsMain extends Component {

  componentDidMount(){
    const user = 24436455475;
    console.log(this.props)
    this.props.fetchUser(user);
  }

  handleClickEdit() {
      if (this.state.allowEdit == false) {
        this.setState({allowEdit: true});
      } else {
        this.setState({allowEdit: false});
      }
  }

  deleteCar(e){
    console.log(e);
  }


  renderVehicles = (vehicle, i) => {

    return(
      <TableRow key={vehicle.register_number}>
        <TableRowColumn>{vehicle.name}</TableRowColumn>
        <TableRowColumn>{vehicle.register_number}</TableRowColumn>
        <TableRowColumn>{vehicle.type}</TableRowColumn>
        <TableRowColumn>{vehicle.owner}</TableRowColumn>
        <TableRowColumn><RaisedButton onClick={this.deleteCar} label="Usuń" secondary={true} /></TableRowColumn>
      </TableRow>
    );
  }

  render() {
    console.log(this.props);
    if (!this.props.user.vehicle){
      return <div>Loading...</div>;
    }
    return(

      <div>
        <Container zDepth={1}>
          <Page>
            <AppBar title="Pojazdy" showMenuIconButton={false} zDepth={0} />

            <AddCar />

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
                {this.props.user.vehicle.map(this.renderVehicles)}
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
