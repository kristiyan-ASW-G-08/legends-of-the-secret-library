import styled from 'styled-components'

export const StyledMainButton = styled(`button`)`
  display: flex;
  align-items: center;
  padding: 5px 40px 5px 10px;
  text-decoration: none;
  font-family: 'Poppins', sans-serif;
  font-size: 1.2rem;
  color: white;
  background: ${({ theme }) => theme.primary};
  transition: 1s;
  box-shadow: 6px 6px 0 black;
  transform: skewX(-15deg);

  :focus {
    outline: none;
  }

  :hover {
    transition: 0.5s;
    box-shadow: 10px 10px 0 ${({ theme }) => theme.secondary};
  }

  span:nth-child(2) {
    transition: 0.5s;
    margin-right: 0px;
  }

  :hover span:nth-child(2) {
    transition: 0.5s;
    margin-right: 45px;
  }

  span {
    transform: skewX(15deg);
  }

  span:nth-child(2) {
    width: 20px;
    margin-left: 30px;
    position: relative;
    top: 12%;
  }

  /**************SVG****************/

  path.one {
    transition: 0.4s;
    transform: translateX(-60%);
  }

  path.two {
    transition: 0.5s;
    transform: translateX(-30%);
  }

  :hover path.three {
    animation: color_anim 1s infinite 0.2s;
  }

  :hover path.one {
    transform: translateX(0%);
    animation: color_anim 1s infinite 0.6s;
  }

  :hover path.two {
    transform: translateX(0%);
    animation: color_anim 1s infinite 0.4s;
  }

  /* SVG animations */

  @keyframes color_anim {
    0% {
      fill: white;
    }
    50% {
      fill: ${({ theme }) => theme.secondary};
    }
    100% {
      fill: white;
    }
  }
`
