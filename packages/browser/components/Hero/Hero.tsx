import { HeroWrapper } from './Hero.styled';
import spaceBattler from '../../assets/BossKhronos.png';
import fireBattler from '../../assets/FireLavaWorm.png';
import arcaneBattler from '../../assets/ArcaneGolem.png';
import space from '../../assets/space.jpg';
import lair from '../../assets/lair.jpg';
import arcane from '../../assets/arcane.jpg';
import { useEffect, useState } from 'react';
import MainButton from '../MainButton/MainButton';
import { StaticImageData } from 'next/image';
import Image from 'next/image';
import SignUp from '../Signup';
const Hero = () => {
  const [tx, setTx] = useState<number>();
  const [ty, setTy] = useState<number>();
  const [currentSet, setCurrentSet] = useState<number>(0);
  const sets = [
    { battler: fireBattler, background: lair },
    { battler: spaceBattler, background: space },
    { battler: arcaneBattler, background: arcane },
  ];
  useEffect(() => {
    const setsTimeOut = setTimeout(() => {
      if (currentSet === sets.length - 1) {
        setCurrentSet(0);
        return;
      }
      setCurrentSet(prev => prev + 1);
    }, 5000);
    const animation = (e: any) => {
      setTx(e.pageX * 0.1);
      setTy(e.pageY * 0.1);
    };
    window.addEventListener('mousemove', animation);
    return () => {
      clearTimeout(setsTimeOut);
      removeEventListener('mousemove', animation);
    };
  });
  return (
    <HeroWrapper background={sets[currentSet].background.src}>
      <img
        style={{ transform: `translate3d(${tx}px, ${ty}px, 0)` }}
        //@ts-ignore
        src={sets[currentSet].battler.src}
        alt=""
      />
      <SignUp />
    </HeroWrapper>
  );
};

export default Hero;
