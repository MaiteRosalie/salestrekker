import React from 'react';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { Box, Text, Heading } from 'rebass';

import { Modal } from './';
import { MODAL_SUCCESS } from '../constants';

export const ModalSuccess = () => {
  return (
    <Modal modalKey={MODAL_SUCCESS}>
      <Box maxWidth="25rem" p={2} pb={4} minHeight="4rem">
        <Box
          as={AiOutlineCheckCircle}
          size="4rem"
          my={1}
          mx="auto"
          style={{ display: 'block' }}
          color="rgb(45, 115, 191)"
        />
        <Text fontSize={3} mb={1} pr="2rem" textAlign="center">
          Information sent successfully
        </Text>
        <Text color="color: rgb(140, 168, 188)" textAlign="center" fontWeight={300}>
          You will be receiving a response from us shortly.
        </Text>
      </Box>
    </Modal>
  );
};
