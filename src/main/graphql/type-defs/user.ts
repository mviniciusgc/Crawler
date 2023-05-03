import { gql } from "apollo-server-express"

export default gql`
  extend type Query {
    user: User!
  }

  type User {
    name: String!
    nick_name: String!
    email: String!
  }
`