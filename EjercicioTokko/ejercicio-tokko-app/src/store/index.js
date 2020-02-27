import { url_base } from "../constants/api_url";
import ApolloClient from "apollo-boost";

export const client = new ApolloClient({
    uri: url_base
});