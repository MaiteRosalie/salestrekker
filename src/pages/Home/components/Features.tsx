import React from 'react';
import { Flex, Box, Text } from 'rebass';
import styled from 'styled-components';
import { IconType } from 'react-icons';
import { BsListCheck, BsGear, BsPuzzle } from 'react-icons/bs';
import { FiHexagon, FiUsers } from 'react-icons/fi';
import { AiOutlineUsergroupAdd } from 'react-icons/ai';
import { GrConnect } from 'react-icons/gr';

const StyledFeature = styled(Box)`
  text-align: center;
  text-shadow: rgb(22, 70, 121) 0px 0.1em 0.1em;
  .feature_content {
    font-weight: 300;
    color: rgb(172, 212, 255);
    font-size: 0.9rem;
  }
  .feature_icon_wrapper {
    position: relative;
    width: 100px;
    height: 100px;
    margin: auto;
  }
  .feature_icon {
    font-size: 2rem;
  }
  path {
    stroke: white;
  }
  .feature_hexagon {
    position: absolute;
    top: 50%;
    left: 50;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 7rem;
    opacity: 0.05;
  }
`;
const StyledFeature2 = styled(Flex)<{ last: boolean }>`
  text-shadow: rgb(22, 70, 121) 0px 0.1em 0.1em;
  border-right: 1px solid transparent;
  min-height: 8rem;
  ${({ last }) => !last && 'border-color:  rgba(255, 255, 255, 0.14)'};
  .feature_content {
    font-weight: 300;
    color: rgb(172, 212, 255);
    font-size: 0.9rem;
  }
  .feature_icon {
    font-size: 1.8rem;
    margin-right: 0.5rem;
  }
  path {
    stroke: white;
  }
`;
type featureType = {
  title: string;
  Icon: IconType;
  content: string;
};
const featureItems: featureType[] = [
  {
    title: 'Organise',
    Icon: BsListCheck,
    content:
      'Organise your leads pipeline, ongoing framework and projects using visual workflow and project boards.',
  },
  {
    title: 'Collaborate',
    Icon: FiUsers,
    content:
      'Collaborate with your team members and partners using deal notes, task, live chat and visual status tools',
  },
  {
    title: 'Connect',
    Icon: GrConnect,
    content:
      'Connect with clients using integrated VoIP phone, SMS, E-Mail, live chat and Client Portal.',
  },
  {
    title: 'Automate',
    Icon: BsGear,
    content:
      'Organise your leads pipeline, ongoing framework and projects using visual workflow and project boards.',
  },
];
const featureItems2: featureType[] = [
  {
    title: 'Full CRM Functionality',
    Icon: BsPuzzle,
    content: 'All clients and deals in one place',
  },
  {
    title: 'Client portal Access',
    Icon: AiOutlineUsergroupAdd,
    content: 'Give your clients access to their deals',
  },
];
export const Features = () => {
  return (
    <Box className="features">
      <Flex className="container" m="auto" flexWrap="wrap" py={3}>
        {featureItems.map(({ title, content, Icon }) => (
          <StyledFeature key={title} className="feature" width={[1, 1 / 2, 1 / 4]} p={2}>
            <Flex className="feature_icon_wrapper" alignItems="center" justifyContent="center">
              <Icon className="feature_icon" />
              <FiHexagon className="feature_hexagon" />
            </Flex>
            <Text className="feature_title" mt={3}>
              {title}
            </Text>
            <Text className="feature_content">{content}</Text>
          </StyledFeature>
        ))}
      </Flex>

      <Box
        style={{
          background: 'linear-gradient(to bottom, rgba(255,255,255,0.08), rgba(255,255,255,0.03))',
          borderTop: '1px solid rgba(255, 255, 255, 0.14)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.14)',
        }}
      >
        <Flex flexWrap="wrap" className="container" m="auto">
          {featureItems2.map(({ title, content, Icon }, i) => (
            <StyledFeature2
              key={title}
              className="feature"
              width={[1, 1 / 2, 1 / 2]}
              p={3}
              alignItems="center"
              last={i === featureItems2.length - 1}
            >
              <Icon className="feature_icon" />
              <Box>
                <Text className="feature_title">{title}</Text>
                <Text className="feature_content">{content}</Text>
              </Box>
            </StyledFeature2>
          ))}
        </Flex>
      </Box>
    </Box>
  );
};
