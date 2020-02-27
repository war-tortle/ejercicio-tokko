import React from 'react';
import gql from 'graphql-tag';

export const POSTS_QUERY = gql`
    mutation createBroker($brokerInput: BrokerInput!) {
        createBroker(brokerInput: $brokerInput) {
            name
            address
        }
    }
`;
