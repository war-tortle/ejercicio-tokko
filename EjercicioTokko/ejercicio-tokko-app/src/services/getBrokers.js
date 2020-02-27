import React from 'react';
import { gql } from "apollo-boost";

export const POSTS_QUERY = gql`
    {
        brokers {
            id
            name
            address
        }
    }
`;