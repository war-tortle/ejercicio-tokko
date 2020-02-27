import React from "react";
import { POSTS_QUERY } from "../../services/getProperties";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Query } from "react-apollo";
import { Col, Row } from 'react-flexbox-grid';
import './styles.css';

const PropertiesData = () => (
    <Query query={POSTS_QUERY}>
        {({loading, error, data}) => {
            if (loading) return <CircularProgress></CircularProgress>;
            if (error) return <p>Error...!</p>;

            return data.properties.map(property => {
                return (
                    <Row key={property.id} className='cont-properties'>
                        <Col className='cont-col-descripcion'>
                            <Row>ID:</Row>
                            <Row>Brokerid:</Row>
                            <Row>Address:</Row>
                            <Row>Latitude:</Row>
                            <Row>Longitude:</Row>
                            <Row>Price:</Row>
                            <Row>Currency:</Row>
                        </Col>
                        <Col className='cont-col-valores'>
                            <Row>{property.id}</Row>
                            <Row>{property.broker.id}</Row>
                            <Row>{property.address}</Row>
                            <Row>{property.latitude}</Row>
                            <Row>{property.longitude}</Row>
                            <Row>{property.price}</Row>
                            <Row>{property.currency}</Row>
                        </Col>
                    </Row>
                )
            })
        }}
    </Query>
);

export default PropertiesData;