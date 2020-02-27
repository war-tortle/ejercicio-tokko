import React, { Component } from 'react';
import BrokerData from "../components/Brokers/BrokerData";
import {Grid} from "@material-ui/core";
import Button from '@material-ui/core/Button';
import Popup from '../components/Popup';

class BrokersContainer extends Component {

    constructor(props){
        super(props);
        this.state = {
            showPopup: false,
            showBrokers: false
        };
    }

    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }

    refreshBrokers() {
        this.setState({
            showBrokers: true
        });
    }

    render() {
        return (
            <Grid>
                <h4>Brokers:</h4>
                <div>
                    <Button onClick={this.togglePopup.bind(this)}>Create Broker</Button>
                    {this.state.showPopup ?
                        <Popup
                            title='Create a New Broker'
                            type='Broker'
                            closePopup={this.togglePopup.bind(this)}
                        />
                        : null
                    }
                </div>
                <div className='cont-broker-data'>
                    <BrokerData></BrokerData>
                </div>
            </Grid>
        )
    }
}

export default BrokersContainer;