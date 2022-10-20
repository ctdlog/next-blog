import ThemeContext from '@/contexts/ThemeContext';
import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';
import { BsSun, BsMoon } from 'react-icons/bs';

const HeaderBlock = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 32px;
  padding: 16px 0;
`;

const LogoImage = styled(Image)`
  border-radius: 50%;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: 500;
  margin-left: 10px;
`;

const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  a,
  button {
    margin: 0 12px;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`;

const ModeToggleButton = styled.button<{ isDark: boolean }>`
  color: white;
  background: none;
  border: none;
  border-radius: 24px;
  padding: 4px 0px;
  cursor: pointer;

  svg {
    width: 30px;
    height: 30px;
    color: ${({ isDark }) => (isDark ? '#fff' : '#000')};
    background-color: ${({ isDark }) => (isDark ? '#343a40' : '#e9ecef')};
    border-radius: 6px;
    padding: 6px;
  }
`;

const Header = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);
  return (
    <HeaderBlock>
      <LogoImage src='/logo.jpg' alt='logo' width='30' height='30' />
      <Logo>Next LAB</Logo>
      <LinkWrapper>
        <ModeToggleButton onClick={toggleTheme} isDark={isDark}>
          {isDark ? <BsSun /> : <BsMoon />}
        </ModeToggleButton>
        {/* <Link href={'/'}>Home</Link>
        <Link href={'/'}>Blog</Link> */}
      </LinkWrapper>
    </HeaderBlock>
  );
};

export default Header;
