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
    explorers: String
    description: String
    latitude: Number
    longitude: Number
    title: String
    reviews: [Reviews]
  }

  type Reviews {
    _id: ID
    description: String
    rating: Number
    tag: String
    difficulty: Number
    image: String
    spot: Spots
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    spots:[Spots]
    spot(spotId: ID!): Spots
    users: [User]
    me: User
    reviews: [Reviews]

  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addSpot(latitude: Number!, longitude: Number!, title: String!): Auth
    addReview(difficulty: Number!): Auth
    login(email: String!, password: String!): Auth
    removeUser(userId: ID!): User
    removeSpot(spotId: ID!): Auth
    updateSpot( id: ID!, title: String!): Auth
  }
`;

module.exports = typeDefs;
