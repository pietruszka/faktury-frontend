// React
import React, { Component } from 'react';

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

// Styled Components
import { Container, Page, Button } from './Main_style'

import { AddCar } from './AddCar'

const CarsMain = () => (
  <div>
    <Container zDepth={1}>
      <Page>
        <AppBar title="Pojazdy" showMenuIconButton={false} zDepth={0} />
        <AddCar />
        <Data />
      </Page>
    </Container>
  </div>
);

class Data extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allowEdit: false,  
    }
    this.handleClickEdit = this.handleClickEdit.bind(this);
    this.editIcon = this.editIcon.bind(this);
  }

  handleClickEdit() {
      if (this.state.allowEdit == false) {
        this.setState({allowEdit: true});
      } else {
        this.setState({allowEdit: false}); 
      }
  }
    
  editIcon() {
      return(<i class="material-icons">clear</i>);
  }
  render() {
    const tableStyle = {
        width: '600px',
        margin: '0 auto',
    }
    // jak wyśrodkować rekordy
    const headerStyle = {
        marginLeft: '100px',
    }
    return(
      <Table style={tableStyle} fixedHeader={false}>
        <TableHeader displaySelectAll={false}>
          <TableRow>
            <TableHeaderColumn>L.p.</TableHeaderColumn>
            <TableHeaderColumn>Nazwa</TableHeaderColumn>
            <TableHeaderColumn>Numer rejestracyjny</TableHeaderColumn>
            <TableHeaderColumn><Button label="EDYTUJ" primary={true} onClick={this.handleClickEdit}></Button></TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
          <TableRow>
            <TableRowColumn>1</TableRowColumn>
            <TableRowColumn>Ferrari</TableRowColumn>
            <TableRowColumn>DW 336MJ</TableRowColumn>
            <TableRowColumn>{ this.state.allowEdit ? this.editIcon() : null }</TableRowColumn>
          </TableRow>
        </TableBody>
      </Table>
    );
  }
}

export default CarsMain;
