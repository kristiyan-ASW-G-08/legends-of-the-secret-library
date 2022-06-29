import React, { FC, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { DocumentNode, useQuery, useMutation } from '@apollo/client';
import 'react-circular-progressbar/dist/styles.css';
import { AuthState } from 'slices/AuthSlice';
import { Wrapper } from '../lobby/styled';

import type { NextPage } from 'next';
//@ts-ignore
import { useSprite } from 'react-sprite-animator';
import StarterPackType from '@/types/StarterPack';
import selectStarterPackQuery from '@/queries/selectStarterQuery';
import { Center } from '@/styled/Center';
import StarterPack from '@/components/StarterPack';
import { StarterSelectionScreen, StartersWrapper } from './styled';
import apolloClient from '../../apolloClient';
import starterPacksQuery from '@/queries/starterQuery';
import { Router, useRouter } from 'next/router';

interface StartersProps {
  starterPacks: StarterPackType[];
  queryError: string;
}
//@ts-ignore
const Starters: FC<StartersProps> = ({ starterPacks, queryError }) => {
  const {
    user: { xp, username, level, battlers, gold, gems },
  } = useSelector((state: { auth: AuthState }) => state.auth);
  const router = useRouter();
  const [selectedArchetype, setSelectedArchetype] = useState<string>('');
  const [selectStarterPack, { loading, error, data }] = useMutation(
    selectStarterPackQuery,
  );
  console.log(JSON.stringify(error));
  return (
    <Wrapper>
      {selectedArchetype ? (
        <StarterSelectionScreen>
          <div className="container">
            <div className="cardsContainer">
              {starterPacks
                .filter(
                  ({ archetype }: { archetype: string }) =>
                    archetype === selectedArchetype,
                )[0]
                .battlers.map(({ card }: { card: string }) => (
                  <img
                    className="front"
                    src={`${process.env.NEXT_PUBLIC_SERVER_URL}/cards/${card}.png`}
                    alt=""
                    style={{ height: '15rem' }}
                  />
                ))}
            </div>
            <div className="buttonsContainer">
              <button
                onClick={() => {
                  selectStarterPack({
                    variables: {
                      starterPackID: starterPacks.filter(
                        ({ archetype }: { archetype: string }) =>
                          archetype === selectedArchetype,
                      )[0]._id,
                    },
                  });
                  router.replace('/lobby');
                }}
              >
                Select
              </button>
              <button onClick={() => setSelectedArchetype('')}>
                Choose Again
              </button>
            </div>
          </div>
        </StarterSelectionScreen>
      ) : (
        ''
      )}
      <StartersWrapper>
        {starterPacks.map((starter: StarterPackType) => (
          <StarterPack
            selected={selectedArchetype}
            setSelected={setSelectedArchetype}
            {...starter}
            key={starter._id}
          />
        ))}
      </StartersWrapper>
    </Wrapper>
  );
};

export async function getServerSideProps() {
  const {
    data: { starterPacks },
  } = await apolloClient.query({
    query: starterPacksQuery,
  });
  return {
    props: {
      starterPacks,
    },
  };
}
export default Starters;
