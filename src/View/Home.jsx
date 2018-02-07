// React
import React from 'react'

// React Router
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// Material-UI
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';


// Styled Components
import { MainBar, MenuButton } from './Home_style'

// Components
import InvoicesMain from './Invoices/InvoicesMain';
import CarsMain from './Cars/CarsMain';
import SettingsMain from './Settings/SettingsMain';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render() {
    return (
      <Router>
        <div>
          <MainBar><MenuButton secondary={true} label="Menu" onClick={this.handleToggle} /></MainBar>
            <Drawer docked={false} width={200} open={this.state.open} onRequestChange={(open) => this.setState({open})} >
              <Link to='/invoices'><MenuItem onClick={this.handleClose}>Faktury</MenuItem></Link>
              <Link to='/cars'><MenuItem onClick={this.handleClose}>Pojazdy</MenuItem></Link>
              <Link to='/settings'><MenuItem onClick={this.handleClose}>Ustawienia</MenuItem></Link>
            </Drawer>
              <Route path='/invoices' component={InvoicesMain} />
              <Route path='/cars' component={CarsMain} />
              <Route path='/settings' component={SettingsMain} />
        </div>
      </Router>
    )
  }
}
