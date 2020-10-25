import React from 'react';
import { Flex } from 'rebass';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

type MenuLinkType = {
  to: string;
  content: string;
};
const StyledMenuLink = styled(Flex)<{ last: boolean }>`
  color: rgb(172, 212, 255);
  text-shadow: rgb(22, 70, 121) 0px 0.1em 0.1em;
  font-weight: 300;
  &:hover {
    color: white;
  }
  ${({ last }) => !last && 'margin-right: 2rem;'};
`;
const StyledMenu = styled(Flex)``;
const menuLinks: MenuLinkType[] = [
  {
    to: '/#home',
    content: 'Home',
  },
  {
    to: '/#about',
    content: 'About',
  },
  {
    to: '/#pricing',
    content: 'Pricing',
  },
  {
    to: '/#contact',
    content: 'Contact',
  },
];
export const Menu = (props: any) => {
  return (
    <StyledMenu as="nav" {...props}>
      {menuLinks.map(({ content, ...etc }, i) => (
        <StyledMenuLink
          key={content}
          as={Link}
          className="menu"
          last={i === menuLinks.length - 1}
          {...etc}
        >
          {content}
        </StyledMenuLink>
      ))}
    </StyledMenu>
  );
};
