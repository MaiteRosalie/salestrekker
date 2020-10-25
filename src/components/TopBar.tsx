import React from 'react';
import { HiMenuAlt1 } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { Flex, Image } from 'rebass';
import styled from 'styled-components';

import { Menu } from './';
import LogoImageUrl from '../public/logo-white.png';

const StyledMenuToggle = styled(HiMenuAlt1)`
  font-size: 1.86rem;
  cursor: pointer;
  color: rgb(172, 212, 255);
  filter: drop-shadow(0px 1px 1px rgb(22, 70, 121));
  &:hover {
    color: white;
  }
`;

export const TopBar = () => {
  return (
    <Flex width={1} as="header" height="3.7rem" style={{ zIndex: 10, position: 'relative' }}>
      <Flex
        className="container"
        m="auto"
        px={3}
        alignItems="center"
        justifyContent="space-between"
        style={{
          borderBottom: '1px solid rgba(255,255,255,0.14)',
          textShadow: '#164679 0 2px 1px;',
        }}
      >
        <Link to="/">
          <Image src={LogoImageUrl} alt="Salestrekker Logo" className="logo" maxWidth="10rem" />
        </Link>

        <StyledMenuToggle className="show-md" />
        <Menu className="hide-md" />
      </Flex>
    </Flex>
  );
};
