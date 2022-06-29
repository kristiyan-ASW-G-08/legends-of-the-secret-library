import { gql } from '@apollo/client';

const signup = gql`
  mutation signup(
    $username: String!
    $email: String!
    $password: String!
    $confirmPassword: String!
  ) {
    signup(
      username: $username
      email: $email
      password: $password
      confirmPassword: $confirmPassword
    ) {
      username
      email
      _id
      level
      xp
      gold
      gems {
        common
        uncommon
        rare
        super
        secret
        mythic
      }
      chests {
        _id
        lootTable {
          _id {
            ...Battler
          }
          chance
          quantity
        }
      }
      battlers {
        ...Battler
        ...Gem
        ...Gold
        ...Chest
      }
      completedLevels
      completedStages
    }
  }
  fragment Battler on Battler {
    _id
    name
    rarity
    archetype
    type
    frontView
    sideView
    card
    stats {
      health
      attack
      effect {
        type
        value
        transformationStages {
          frontView
          sideView
          health
          attack
        }
      }
    }
  }
  fragment Gold on Gold {
    name
    _id
  }
  fragment Gem on Gem {
    _id
    name
    rarity
  }
`;
export default signup;
