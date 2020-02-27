import React from 'react';
import { gql } from "apollo-boost";

export const POSTS_QUERY = gql`
    mutation createProperty($propertyInput: PropertyInput!) {
        createProperty(propertyInput: $propertyInput) {
            broker {
                id
            }
            address
            latitude
            longitude
            price
            currency
        }
    }
`;