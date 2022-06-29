import { gql } from '@apollo/client';

const starterPacksQuery = gql`
  query starterPacks {
    starterPacks {
      _id
      archetype
      battlers {
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
    }
  }
`;

export default starterPacksQuery;
