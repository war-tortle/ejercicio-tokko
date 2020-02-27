import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid, Col, Row } from 'react-flexbox-grid';
import './App.css';
import BrokersContainer from "./containers/BrokersContainer";
import PropertiesContainer from "./containers/PropertiesContainer";


function App() {
  return (
    <Grid>
        <Row>
            <AppBar position='sticky'>
                <Toolbar className='toolbar-color'>
                    <Typography variant='h6' color='inherit'>
                        Brokers Admin Panel
                    </Typography>
                </Toolbar>
            </AppBar>
        </Row>
        <Row>
            <Col xs={12} md={6}>
                <BrokersContainer></BrokersContainer>
            </Col>
            <Col xs={12} md={6}>
                <PropertiesContainer className="Properties-details"></PropertiesContainer>
            </Col>
        </Row>
    </Grid>
  );
}

export default App;
