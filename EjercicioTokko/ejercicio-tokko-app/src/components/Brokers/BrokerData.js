import React, { useState } from "react";
import { POSTS_QUERY } from "../../services/getBrokers";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Query } from "react-apollo";
import { Col, Row } from 'react-flexbox-grid';
import './styles.css';

const BrokerData = () => <Query query={POSTS_QUERY}>
    {({loading, error, data}) => {
        if (loading) return <CircularProgress></CircularProgress>;
        if (error) return <p>Error...!</p>;

        return data.brokers.map(broker => {
            return (
                <Row key={broker.id} className='cont-broker'>
                    <Col className='cont-col-descripcion'>
                        <Row>ID:</Row>
                        <Row>Name:</Row>
                        <Row>Address:</Row>
                    </Col>
                    <Col className='cont-col-valores'>
                        <Row>{broker.id}</Row>
                        <Row>{broker.name}</Row>
                        <Row>{broker.address}</Row>
                    </Col>
                </Row>
            )
        })
    }}
</Query>;

export default BrokerData;