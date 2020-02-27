import React, { Component } from 'react';
import PropertiesData from "../components/Properties/PropertiesData";
import {Grid} from "@material-ui/core";
import Button from '@material-ui/core/Button';
import './styles.css';
import Popup from "../components/Popup";

class PropertiesContainer extends Component {

    constructor(props){
        super(props);
        this.state = { showPopup: false };
    }

    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }
    render() {
        return (
            <Grid>
                <h4>Properties:</h4>
                <div>
                    <Button onClick={this.togglePopup.bind(this)}>Create Property</Button>

                    {this.state.showPopup ?
                        <Popup
                            title='Create a New Property'
                            type='Property'
                            closePopup={this.togglePopup.bind(this)}
                        />
                        : null
                    }
                </div>
                <div className='cont-properties-data'>
                    <PropertiesData></PropertiesData>
                </div>
            </Grid>
        )
    }
}

export default PropertiesContainer;