import { gql } from '@apollo/client';

const login = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      user {
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
        }
        completedLevels
        completedStages
      }
      token
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
      effects {
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
`;
export default login;
