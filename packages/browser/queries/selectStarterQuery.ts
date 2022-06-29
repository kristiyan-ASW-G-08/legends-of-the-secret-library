import { gql } from '@apollo/client';

const selectStarterPack = gql`
  mutation selectStarterPack($starterPackID: ID!) {
    selectStarterPack(starterPackID: $starterPackID) {
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
export default selectStarterPack;
