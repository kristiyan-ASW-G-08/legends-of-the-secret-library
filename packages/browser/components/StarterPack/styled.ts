import styled from 'styled-components';

export const CardContainer = styled('article')`
  position: relative;
`;

export const Card = styled('div')`
  transition: transform 1s ease-in-out;

  &.selected {
    transform: rotateY(180deg);
    transform-style: preserve-3d;
  }
  img {
    height: 15rem;
    position: absolute;
  }
 .front {
  }
.back {
    transform: rotateY(180deg);
  }
`;
