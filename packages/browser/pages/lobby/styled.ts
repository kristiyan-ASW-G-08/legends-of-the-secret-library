import styled from 'styled-components';
import background from '../../assets/space.jpg';
export const Wrapper = styled('main')`
  padding: 4rem;
  width: 100vw;
  height: 100vh;
  display: grid;
  background: url(${background.src}) no-repeat;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  padding-top: 10rem;
  grid-template-columns: 1fr;
  grid-template-rows: 10rem;

  .bottom {
    background-color: rgba(31, 41, 55, 0.5);
    display: grid;
    align-items: center;
    .shop {
      display: grid;
      grid-template-columns: 1fr 1fr;
      img {
        height: 10rem;
        width: 10rem;
      }
    }
  }
`;

export const XPBar = styled('div')`
  width: 4rem;
  height: 4rem;
  z-index: 5;
  background: ${({ theme }) => theme.background};
  border-radius: 100px;
`;

export const UserData = styled('div')`
  display: grid;
  grid-template-rows: 4rem;
  grid-template-columns: 1fr 1fr;
  .left {
    display: grid;
    grid-template-rows: 4rem;
    grid-template-columns: 7rem 25rem;
  }
  .right {
    .currency {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      list-style: none;
      background-color: rgba(31, 41, 55, 0.5);
      padding: 0.5rem;
      border-radius: 5rem;
      li {
        display: grid;
        place-items: center center;
        grid-template-columns: 1rem 4rem;
      }
      p {
        color: ${({ theme }) => theme.light};
        font-size: 1.2rem;
      }
      img {
        height: 3rem;
        width: 3rem;
      }
    }
  }
  .user {
    color: ${({ theme }) => theme.secondary};
    background-color: rgba(31, 41, 55, 0.5);
    border-radius: 5rem;
    padding-left: 4rem;
    transform: translateX(-7rem);
    display: grid;
    align-items: center;
    h1 {
      padding: 0.3rem;
      font-size: 1.1rem;
    }
  }
`;
