import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { AuthState } from 'slices/AuthSlice';
import { UserData, Wrapper, XPBar } from './styled';
import theme from '../theme';

import goldImg from '../../assets/gold.png';
import commonImg from '../../assets/common.png';
import uncommonImg from '../../assets/uncommon.png';
import rareImg from '../../assets/rare.png';
import superRareImg from '../../assets/superrare.png';
import secretRareImg from '../../assets/secretrare.png';
import mythicRareImg from '../../assets/mythicrare.png';
import shop from '../../assets/shop.png';

const Lobby = () => {
  const {
    user: { xp, username, level, battlers, gold, gems },
  } = useSelector((state: { auth: AuthState }) => state.auth);

  return (
    <Wrapper>
      <div className="top">
        <UserData>
          <div className="left">
            <XPBar>
              <CircularProgressbar
                maxValue={1000}
                value={xp}
                text={`${level} LV`}
                styles={buildStyles({
                  rotation: 0.25,
                  strokeLinecap: 'butt',
                  textSize: '24px',
                  pathTransitionDuration: 0.5,
                  pathColor: `rgba(62, 152, 199, ${xp / 100})`,
                  textColor: theme.primary,
                  trailColor: theme.secondary,
                  backgroundColor: '#3e98c7',
                })}
              />
              ;
            </XPBar>

            <div className="user">
              <h1>{username}</h1>
            </div>
          </div>
          <div className="right">
            <ul className="currency">
              <li>
                <p>{gold}</p>
                <img src={goldImg.src} alt="gold"></img>
              </li>

              <li>
                <p>{gems.common}</p>
                <img src={commonImg.src}></img>
              </li>

              <li>
                <p>{gems.uncommon}</p>
                <img src={uncommonImg.src}></img>
              </li>

              <li>
                <p>{gems.rare}</p>
                <img src={rareImg.src}></img>
              </li>

              <li>
                <p>{gems.super}</p>
                <img src={superRareImg.src}></img>
              </li>
              <li>
                <p>{gems.secret}</p>
                <img src={secretRareImg.src}></img>
              </li>
              <li>
                <p>{gems.mythic}</p>
                <img src={mythicRareImg.src}></img>
              </li>
            </ul>
          </div>

        </UserData>
      </div>
    </Wrapper>
  );
};

export default Lobby;
