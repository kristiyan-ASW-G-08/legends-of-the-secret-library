import styled from 'styled-components'

interface HeroWrapperProps {
  background: string
}
export const HeroWrapper = styled('section')<HeroWrapperProps>`
  width: 100vw;
  height: 100vh;
  background: url(${({ background }) => background}) no-repeat;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: 2fr 1fr;
  grid-gap: 5rem;
  -webkit-transition: background-image 0.2s ease-in-out;
  transition: background-image 0.2s ease-in-out;
  img {
    -webkit-backface-visibility: hidden;
    -webkit-perspective: 1000;
    height: 50%;
    grid-column: 1;
    grid-row: 1;
    -webkit-transition: background-image 0.2s ease-in-out;
    transition: background-image 0.2s ease-in-out;
  }
`
