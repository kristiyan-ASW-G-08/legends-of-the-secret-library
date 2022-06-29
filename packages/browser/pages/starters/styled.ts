import styled from 'styled-components';
import background from '../../assets/space.jpg';
interface WrapperProps {
  background: string;
}
export const Wrapper = styled('main')<WrapperProps>`
  padding: 4rem;
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center center;
  background: url(${({ background }) => background}) no-repeat;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  padding-top: 10rem;
  grid-template-columns: 1fr;
  grid-template-rows: 10rem;
`;

export const StartersWrapper = styled('section')`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2rem;
`;

export const StarterSelectionScreen = styled('div')`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(31, 41, 55, 0.5);
  z-index: 100;
  display: grid;
  place-items: center;
  .container {
    display: grid;
    grid-gap: 2rem;
  }
  .cardsContainer {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 3rem;
  }
  .buttonsContainer {
    display: grid;
    justify-items: center;
    grid-template-columns: 1fr 1fr;
    button {
      border: none;
      padding: 0.7rem 1.4rem 0.7rem 1.4rem;
      background: ${({ theme }) => theme.primary};
      color: ${({ theme }) => theme.light};
      &:hover {
        background: ${({ theme }) => theme.secondary};
      }
    }
  }
`;
