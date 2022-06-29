import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type StarterPack {
    _id: ID!
    archetype: String!
    battlers: [Battler]!
  }
  type Gems {
    common: Int!
    uncommon: Int!
    rare: Int!
    super: Int!
    secret: Int!
    mythic: Int!
  }
  type Gold {
    name: String
  }
  type Gem {
    name: String
    rarity: String
  }
  type Gems {
    common: Int
    uncommon: Int
    rare: Int
    super: Int
    secret: Int
    mythic: Int
  }
  union _id = Battler | Chest | Gold | Gem
  type Item {
    _id: Battler
    chance: Int
    quantity: Int
  }
  type Chest {
    _id: ID!
    lootTable: [Item]
  }
  type Stage {
    frontView: String!
    sideView: String!
    health: Int!
    attack: Int!
  }
  type Effect {
    type: String!
    value: Int!
    transformationStages: [Stage]
  }
  type Stats {
    health: Int
    attack: Int
    effects: [Effect]
  }
  type Battler {
    _id: ID!
    name: String
    rarity: String
    archetype: String
    type: String
    frontView: String
    sideView: String
    card: String
    stats: Stats
    bossStats: Stats
    isForSale: Boolean
    priceGold: Int
    priceGems: Int
  }
  type User {
    username: String!
    email: String!
    _id: ID!
    level: Int!
    xp: Int!
    gold: Int!
    gems: Gems!
    chests: [Chest]!
    battlers: [Battler]!
    completedLevels: [ID]!
    completedStages: [ID]!
  }
  type Query {
    user: User!
    starterPacks: [StarterPack]
  }
  type LoginPayload {
    user: User!
    token: String!
  }
  type Mutation {
    signup(
      username: String!
      email: String!
      password: String!
      confirmPassword: String!
    ): User!
    login(email: String!, password: String!): LoginPayload!
    selectStarterPack(starterPackID: ID!): User
  }
`;

export default typeDefs;
