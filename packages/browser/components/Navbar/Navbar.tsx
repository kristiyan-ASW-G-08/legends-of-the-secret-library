import Link from 'next/link';
import router from 'next/router';
import { useSelector } from 'react-redux';
import { AuthState } from 'slices/AuthSlice';
import MainButton from '../MainButton/MainButton';
import { Logo, NavbarWrapper, Links } from './Navbar.styled';
const Navbar = () => {
  const {
    user: { xp, username, level, battlers, gold, gems, hasSelectedStarters },
    token,
  } = useSelector((state: { auth: AuthState }) => state.auth);
  // if (hasSelectedStarters) {
  //   router.push('/lobby');
  // } else router.push('/starters');
  return (
    <NavbarWrapper>
      <Logo>LS</Logo>
      {token ? (
        ''
      ) : (
        <Link href="/login">
          <a>
            <MainButton content="Play Now" />
          </a>
        </Link>
      )}
      {token ? (
        <ul>
          <Link href="/login">
            <a>Shop</a>
          </Link>
          <Link href="/login">
            <a>Stages</a>
          </Link>
          <Link href="/login">
            <a>Stages</a>
          </Link>
        </ul>
      ) : (
        ''
      )}
    </NavbarWrapper>
  );
};

export default Navbar;
