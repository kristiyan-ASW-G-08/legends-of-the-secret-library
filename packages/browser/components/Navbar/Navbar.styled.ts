import styled from 'styled-components'

export const NavbarWrapper = styled('nav')`
  width: 100vw;
  padding: 1rem 1.7rem 1rem 1.7rem;
  background: ${({ theme }) => theme.background};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  background-color: rgba(31, 41, 55, 0.5);
`

export const Logo = styled(`span`)`
  color: ${({ theme }) => theme.primary};
  font-size: 2rem;
  font-weight: 900;
`
export const Links = styled('ul')`
  list-style: none;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(3, auto);
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.light};
    font-weight: 900;
    font-size: 1.2rem;
    &.active {
      color: ${({ theme }) => theme.primary};
    }
  }
`
