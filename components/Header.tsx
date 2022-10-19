import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';

const HeaderBlock = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 48px;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: 500;
  margin-left: 10px;
`;

const LinkWrapper = styled.div`
  margin-left: auto;

  a {
    margin: 0 12px;
    color: inherit;
    text-decoration: none;
  }
`;

const LogoImage = styled(Image)`
  border-radius: 50%;
`;

const Header = () => {
  return (
    <HeaderBlock>
      <LogoImage src='/logo.jpg' alt='logo' width='30' height='30' />
      <Logo>Cobb.log</Logo>
      <LinkWrapper>
        <Link href={'/'}>Home</Link>
        <Link href={'/'}>Blog</Link>
      </LinkWrapper>
    </HeaderBlock>
  );
};

export default Header;
