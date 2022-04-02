const { gql } = require('apollo-server-express');
//User Will define 
const typeDefs = gql`

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    spots: [Spots]
  }

  type Spots {
    _id: ID
    explorers: [User]
    description: String
    coordinates: String
    image: String
    title: String
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    spots:[Spots]
    users: [User]
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addSpot(description: String!, coordinates: String!, title: String!): Auth
    login(email: String!, password: String!): Auth
    removeUser(userId: ID!): User
    removeSpot(spotId: ID!): User
    updateSpot( id: ID!, title: String!): Auth
  }
`;

module.exports = typeDefs;
