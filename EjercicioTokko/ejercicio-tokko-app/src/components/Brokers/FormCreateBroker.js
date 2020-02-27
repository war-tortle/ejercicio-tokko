import React, { Component } from 'react';
import { Mutation } from "react-apollo";
import {POSTS_QUERY} from "../../services/createBroker";
import Button from "@material-ui/core/Button";
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import './styles.css';


class FormCreateBroker extends Component {

    constructor(props){
        super(props);
    };

    state = {
        broker: {
            name: '',
            address: ''
        }
    };

    render() {
        return (
            <Mutation mutation={POSTS_QUERY}>
                { createBroker => (
                    <ValidatorForm onSubmit={ e => {
                        e.preventDefault();
                        const {name, address} = this.state.broker;
                        const brokerInput = {
                            name,
                            address
                        };
                        createBroker({
                            variables:{brokerInput}
                        })
                    }
                    }>
                        <div className="cont-inputs">
                            <TextValidator type='text' validators={["required"]} errorMessages={["This field is required"]} value={this.state.broker.name} placeholder='Name' onChange={e => {
                                this.setState({
                                    broker: {
                                        ...this.state.broker,
                                        name:e.target.value
                                    }
                                })}
                            }/>
                        </div>
                        <div className="cont-inputs">
                            <TextValidator type='text' validators={["required"]} errorMessages={["This field is required"]} value={this.state.broker.address} placeholder='Address' onChange={e => {
                                this.setState({
                                    broker: {
                                        ...this.state.broker,
                                        address:e.target.value
                                    }
                                })}
                            }/>
                        </div>
                        <div className="boton-confirm">
                            <Button type="submit">Confirmar</Button>
                        </div>
                    </ValidatorForm>
                )}
            </Mutation>
        );
    }
}

export default FormCreateBroker;