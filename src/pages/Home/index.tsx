import React from 'react';
import { Flex, Box, Image, Text } from 'rebass';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { TopBar, ButtonPrimary, Contact } from '../../components';
import { Features, Prices, Map, Video } from './components';
import HeroImageUrl from '../../public/hero-city.jpg';

export const StyledHero = styled(Box)`
  position: relative;
  background: linear-gradient(to top, rgba(0, 38, 79, 0.4), transparent 150px),
    linear-gradient(to bottom right, rgba(0, 38, 79, 0.95), rgba(41, 136, 238, 0.92));
`;
export const StyledHeroBackground = styled(Image)`
  position: absolute;
  z-index: 0;
  opacity: 0.04;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;
export const StyledHeroContent = styled(Box)`
  position: relative;
  z-index: 1;
  color: white;
  h1,
  h2 {
    text-shadow: rgb(22, 70, 121) 0px 0.1em 0.1em;
  }
`;
const ButtonA = styled(Box)`
  background: linear-gradient(to top, #b1cceb, #e4edf7);
  color: #1a5ba1;
  text-shadow: rgba(255, 255, 255, 0.5) 0 1px 0;
  display: inline-block;
  padding: 0.7rem 1.3rem;
  border-radius: 0.2rem;
  text-transform: uppercase;
  font-weight: 600;
  margin-right: 0.5rem;
`;
const ButtonB = styled(Box)`
  display: inline-block;
  padding: 0.7rem 1.3rem;
  border-radius: 0.2rem;
  border: 1px solid #8eadcd;
  text-transform: uppercase;
  font-weight: 600;
  text-shadow: rgb(22, 70, 121) 0px 0.1em 0.1em;
`;
export const HomePage = () => {
  return (
    <Flex className="HomePage" flexDirection="column" style={{ width: '100%', height: '100%;' }}>
      <ButtonPrimary width="1" minHeight="3.5rem" as="a" href="#discover">
        Check out SalesTrekker's new product, Commission reporting, a new approach to Sales ›
      </ButtonPrimary>
      <StyledHero id="home">
        <TopBar />
        <StyledHeroBackground src={HeroImageUrl} alt="Hero Image" />
        <StyledHeroContent>
          <Box className="container" m="auto" my={3}>
            <Text as="h1" textAlign="center" fontSize="2.5rem" fontWeight="300" mt={3} mb={1}>
              Let your CRM do the work
            </Text>
            <Text as="h2" textAlign="center" fontWeight="300" color="#acd4ff">
              Automate your sales pipeline, ongoing work and projects
            </Text>
            <Box my={4} style={{ textAlign: 'center' }}>
              <ButtonA as={Link} to="/form">
                Try it for free
              </ButtonA>
              <ButtonB as="a" href="#about">
                Learn More
              </ButtonB>
            </Box>
          </Box>

          <Features />
        </StyledHeroContent>
      </StyledHero>
      <Prices />
      <Video />
      <Map />
      <Contact />
    </Flex>
  );
};
