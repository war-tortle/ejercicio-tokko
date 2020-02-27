import React, { Component } from 'react';
import { Mutation } from "react-apollo";
import { POSTS_QUERY } from "../../services/createProperties";
import Button from "@material-ui/core/Button";
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import './styles.css';

class FormCreateProperty extends Component {

    constructor(props){
        super(props);
        this.state = {
            property: {
                broker: {
                    id: ''
                },
                address: '',
                latitude: '',
                longitude: '',
                price: '',
                currency: ''
            }
        };
    };

    render() {
        return (
            <Mutation mutation={POSTS_QUERY}>
                { createProperty => (
                    <ValidatorForm noValidate onSubmit={ e => {
                        e.preventDefault();

                        const {broker, address, latitude, longitude, price, currency} = this.state.property;
                        const propertyInput = {
                            brokerId: Number(broker.id),
                            address,
                            latitude: Number(latitude),
                            longitude: Number(longitude),
                            price: Number(price),
                            currency
                        };
                        createProperty({
                            variables:{propertyInput}
                        })
                    }
                    }>


                        <div className="cont-inputs-prop">
                            <TextValidator type="number" validators={["required"]} errorMessages={["This field must be a number"]} value={this.state.property.broker.id} placeholder='Broke ID' onChange={e => {
                                this.setState({
                                    property: {
                                        ...this.state.property,
                                        broker: {
                                            id: e.target.value
                                        }
                                    }
                                })}
                            }/>
                        </div>
                        <div className="cont-inputs-prop">
                            <TextValidator type='text' validators={["required"]} errorMessages={["This field is required"]} value={this.state.property.address} placeholder='Address' onChange={e => {
                                this.setState({
                                    property: {
                                        ...this.state.property,
                                        address:e.target.value
                                    }
                                })}
                            }/>
                        </div>
                        <div className="cont-inputs-prop">
                            <TextValidator type="number" step="any" validators={["required"]} errorMessages={["This field must be a float"]} value={this.state.property.latitude} placeholder='Latitude' onChange={e => {
                                this.setState({
                                    property: {
                                        ...this.state.property,
                                        latitude:e.target.value
                                    }
                                })}
                            }/>
                        </div>
                        <div className="cont-inputs-prop">
                            <TextValidator type="number" step="any" validators={["required"]} errorMessages={["This field must be a float"]} value={this.state.property.longitude} placeholder='Longitude' onChange={e => {
                                this.setState({
                                    property: {
                                        ...this.state.property,
                                        longitude:e.target.value
                                    }
                                })}
                            }/>
                        </div>
                        <div className="cont-inputs-prop">
                            <TextValidator type="number" validators={["required"]} errorMessages={["This field must be a number"]} value={this.state.property.price} placeholder='Price' onChange={e => {
                                this.setState({
                                    property: {
                                        ...this.state.property,
                                        price:e.target.value
                                    }
                                })}
                            }/>
                        </div>
                        <div className="cont-inputs-prop">
                            <TextValidator type='text' validators={["required"]} errorMessages={["This field is required"]} value={this.state.property.currency} placeholder='Currency' onChange={e => {
                                this.setState({
                                    property: {
                                        ...this.state.property,
                                        currency:e.target.value
                                    }
                                })}
                            }/>
                        </div>
                        <div className="boton-confirm">
                            <Button type="submit">Confirm</Button>
                        </div>
                    </ValidatorForm>
                )}
            </Mutation>
        );
    }
}
export default FormCreateProperty;