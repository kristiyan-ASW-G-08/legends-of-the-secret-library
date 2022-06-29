import styled from 'styled-components';
import forestPortal from '../../assets/forestPortal.jpg';
export const Container = styled('div')`
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center center;
  background: url(${forestPortal.src}) no-repeat;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-attachment: fixed; ;
`;
