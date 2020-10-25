import React from 'react';
import { Flex, Text, Box } from 'rebass';
import styled from 'styled-components';
import { IconType } from 'react-icons';
import { RiMapPinLine } from 'react-icons/ri';
import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai';

const StyledContacts = styled(Flex)`
  font-size: 0.8rem;
  background: white;
  border-radius: 1rem;
  .contact_title {
    color: rgb(140, 168, 188);
  }
  .contact_icon {
    margin-right: 0.5rem;
    font-size: 1.5rem;
  }
`;

type contactType = {
  title: string;
  Icon: IconType;
  content: string;
};
const contactItems: contactType[] = [
  {
    title: 'Our headquarters',
    Icon: RiMapPinLine,
    content: 'Level 23, 520 Oxford Street Bondi Junction NSW 2022, Australia',
  },
  {
    title: 'Speak to us',
    Icon: AiOutlinePhone,
    content: '+61 02 9037 7350',
  },
  {
    title: 'Drop us a message',
    Icon: AiOutlineMail,
    content: 'support@salestrekker.com',
  },
];
export const Contact = () => {
  return (
    <StyledContacts className="contact container" m="auto" flexWrap="wrap" id="contact">
      {contactItems.map(({ title, content, Icon }) => (
        <Flex
          className="contact"
          width={[1, 1 / 3, 1 / 3]}
          p={2}
          px={3}
          alignItems="center"
          justifyContent="center"
        >
          <Flex alignItems="center">
            <Icon className="contact_icon" />
            <Box>
              <Text className="contact_title">{title}</Text>
              <Text className="contact_content">{content}</Text>
            </Box>
          </Flex>
        </Flex>
      ))}
    </StyledContacts>
  );
};
