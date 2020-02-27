import React from 'react';
import { gql } from "apollo-boost";

export const POSTS_QUERY = gql`
    {
        properties {
            id
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