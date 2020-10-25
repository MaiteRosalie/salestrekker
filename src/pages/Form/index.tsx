import React, { useState } from 'react';
import { Box, Flex, Text } from 'rebass';
import { GoShield } from 'react-icons/go';

import { useModalContext } from '../../context';
import { Card, Input, Contact, TopBar, ButtonPrimary } from '../../components';
import { MODAL_SUCCESS } from '../../constants';
import { StyledHero, StyledHeroBackground, StyledHeroContent } from '../Home';
import { fields } from './fields';
import HeroImageUrl from '../../public/hero-city.jpg';

const fieldProps = {
  mb: [1, 1, 3],
  mt: 1,
  required: true,
};
const columnProps = {
  width: [1, 'calc(50% - 1rem)'],
  flexDirection: 'column' as 'column',
};

export const FormPage = () => {
  const [data, setData] = useState<{ [key: string]: number | string | undefined }>({});
  const { openModal } = useModalContext();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    openModal(MODAL_SUCCESS);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let newData: { [key: string]: number | string | undefined } = {
      ...data,
    };
    newData[name] = value;
    setData(newData);
  };

  return (
    <Flex className="FormPage" style={{ width: '100%', height: '100%;' }} flexDirection="column">
      <StyledHero>
        <TopBar />
        <StyledHeroBackground src={HeroImageUrl} alt="Hero Image" />
        <StyledHeroContent>
          <Card
            as="form"
            onSubmit={handleSubmit}
            m="auto"
            my={4}
            maxWidth="750px"
            style={{
              color: '#446072',
            }}
          >
            <Flex width={1} flexWrap="wrap" justifyContent="space-between" p={3}>
              <Text
                as="h4"
                fontSize={[4, 5]}
                mb={[1, 2]}
                mt={[0, 1]}
                width={1}
                className="hide-sm"
                fontWeight={300}
              >
                Try it for free
              </Text>
              <Flex {...columnProps}>
                {fields.slice(0, 7).map((el) => (
                  <Input
                    {...el}
                    key={el.name}
                    {...fieldProps}
                    onChange={handleChange}
                    value={data[el.name] || ''}
                  />
                ))}
              </Flex>
              <Flex {...columnProps}>
                {fields.slice(7, fields.length).map((el) => (
                  <Input
                    {...el}
                    key={el.name}
                    {...fieldProps}
                    onChange={handleChange}
                    value={data[el.name] || ''}
                  />
                ))}
              </Flex>
            </Flex>
            <Flex
              flexWrap="wrap"
              mt={1}
              justifyContent="space-between"
              width={1}
              p={3}
              css={{
                borderTop: '1px solid rgb(221, 228, 233);',
              }}
            >
              <Flex as="p" fontSize={2} width={[1, 1 / 2]} className="hide-sm" alignItems="center">
                <Box as={GoShield} verticalAlign="middle" mr={1} size={18} /> Your information is
                always be safe with us.
              </Flex>
              <ButtonPrimary
                as="button"
                style={{
                  padding: '0.5rem 0.8rem',
                  borderRadius: '3px',
                }}
              >
                Submit
              </ButtonPrimary>
            </Flex>
          </Card>
        </StyledHeroContent>
      </StyledHero>
      <Contact />
    </Flex>
  );
};
