import { gql } from '@apollo/client';

export const QUERY_ME = gql`
{
  me{
    _id
    firstName
    lastName
    email
    spots
  }
}
`;
export const QUERY_SPOTS = gql`
  query getSpots {
    spots {
      _id
      title
      description
      latitude
      longitude
      explorers
      description
      createdAt
    }
  }
`;

export const QUERY_SINGLE_SPOT = gql`
  query getSingleSpot($spotId: ID!) {
    spot(spotId: $spotId) {
      _id
      title
      description
      latitude
      longitude
      explorers
      description
      createdAt
      reviews{
        _id
        description
        rating
        tag
        image
        difficulty
        createdAt
      }
    }
  }
`;