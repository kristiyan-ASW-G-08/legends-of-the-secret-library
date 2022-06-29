import React, { Dispatch, FC, SetStateAction } from 'react';
import StarterPackType from '@/types/StarterPack';
import { CardContainer, Card } from './styled';
import cardBg from '../../assets/back.png';
import styles from './styles.module.css';
interface StarterPackProps extends StarterPackType {
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
}
const StarterPack: FC<StarterPackProps> = ({
  archetype,
  battlers,
  selected,
  setSelected,
}) => {
  console.log(selected);
  return (
    // <CardContainer onClick={() => setSelected(archetype)}>
    //   <Card className={selected === archetype ? 'selected' : ''}>
    //   <img className="front" src={cardBg.src} alt="" />
    //     <img
    //       className="back"
    //       src={`${process.env.NEXT_PUBLIC_SERVER_URL}/cards/${battlers[0].card}.png`}
    //       alt=""
    //     />

    //   </Card>
    // </CardContainer>
    <div className={styles.flipCard} onClick={() => setSelected(archetype)}>
      <div className={selected === archetype ? styles.flipCardInner : ''}>
        <div className={styles.front}>
          <img
            className="front"
            src={cardBg.src}
            alt=""
            style={{ height: '15rem' }}
          />
        </div>
        <div>
          <img
            className="back"
            src={`${process.env.NEXT_PUBLIC_SERVER_URL}/cards/${battlers[0].card}.png`}
            alt=""
            style={{ height: '15rem' }}
          />
        </div>
      </div>
    </div>
  );
};

export default StarterPack;
