// React
import React from 'react';

// Components
import Revenues from './Revenues/Revenues.jsx'
import Expenses from './Expenses/Expenses.jsx'

// Styled Components
import { Container, Page } from './Main_style'

// Material-UI
import { Tabs, Tab } from 'material-ui/Tabs';
import AppBar from 'material-ui/AppBar';


const InvoicesMain = () => (
    <div>
      <Container zDepth={1}>
        <Page>
          <AppBar title="Faktury" showMenuIconButton={false} zDepth={0} />
          <Tabs>
              <Tab label="PRZYCHODY">
                <Revenues />
              </Tab>
              <Tab label="WYDATKI">
                <Expenses />
              </Tab>
          </Tabs>
        </Page>
      </Container>
    </div>
);

export default InvoicesMain;
