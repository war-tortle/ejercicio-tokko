import React, { Component }  from 'react';
import AppBar from "@material-ui/core/AppBar";
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import './styles.css';
import Button from '@material-ui/core/Button';
import FormCreateBroker from './Brokers/FormCreateBroker';
import FormCreateProperty from './Properties/FormCreateProperty';

class Popup extends Component {
    render() {
        return (
            <div className='popup'>
                <div className='popup_inner'>
                    <AppBar position='sticky' className='cont-app-bar'>
                        <Toolbar className='popup-toolbar-color'>
                            <Typography variant='h6' color='inherit'>
                                {this.props.title}
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    {
                        this.props.type === 'Broker' ? <FormCreateBroker/> : <FormCreateProperty/>
                    }
                    <div className="boton-cancel">
                        <Button onClick={this.props.closePopup}>Close</Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Popup;