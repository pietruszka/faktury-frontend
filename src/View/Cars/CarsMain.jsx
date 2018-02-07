// React
import React, { Component } from 'react';

// Material-UI
import AppBar from 'material-ui/AppBar';

// Styled Components
import { Container, Page } from './Main_style'

const CarsMain = () => (
  <div>
    <Container zDepth={1}>
      <Page>
        <AppBar title="Pojazdy" showMenuIconButton={false} zDepth={0} />
      </Page>
    </Container>
  </div>
);

export default CarsMain;
