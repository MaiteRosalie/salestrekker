import React, { useState } from 'react';
import { Flex, Box, Text } from 'rebass';
import styled from 'styled-components';
import ReactPlayer from 'react-player';
import { FaPlay } from 'react-icons/fa';
import { AiFillCaretRight } from 'react-icons/ai';

import video from '../../../public/video.mp4';
const StyledVideo = styled(Flex)`
  .video_player {
    position: absolute;
    top: 0;
    right: 0;
    width: 100% !important;
    height: 100% !important;
  }

  .video_thumb {
    position: relative;
    width: 100%;
    border-radius: 8px;
    box-shadow: 0 30px 70px rgba(22, 39, 47, 0.3);
    overflow: hidden;
    padding-top: 20rem;
    cursor: pointer;
    & video {
      object-fit: cover;
    }
  }
  .video_button {
    border-radius: 50%;
    width: 4rem;
    height: 4rem;
    background: linear-gradient(to top, rgba(0, 38, 79, 0.4), transparent 150px),
      linear-gradient(to right bottom, rgba(0, 38, 79, 0.95), rgba(41, 136, 238, 0.92));
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
  }
  .video_feature_icon {
    vertical-align: middle;
    margin-top: -0.1rem;
    color: rgb(45, 115, 191);
  }
  .video_feature_content {
    color: rgb(140, 168, 188);
    font-weight: 300;
    font-size: 0.9rem;
  }
`;
type videoFeatureType = {
  title: string;
  content: string;
};
const featureItems: videoFeatureType[] = [
  {
    title: 'Updates and reminders',
    content:
      'Set up an extensive choice of updates and reminders, based on deal and task statuses.',
  },
  {
    title: 'Task automation',
    content:
      'Automate task and due date allocation to your team members wih workflow stage change.',
  },
  {
    title: 'Permission Controls',
    content: 'Allow access based on team membership or deal ownership.',
  },
];
const featureItems2: videoFeatureType[] = [
  {
    title: 'Fully Customisable',
    content: 'Create custom workflows, status indicators and segments. ',
  },
  {
    title: 'API integrations',
    content: 'Integrate your favourite applications with Salestrekker.',
  },
  {
    title: 'Export and backup data',
    content: 'Export your contacts, deals and notes to backup your information.',
  },
];
export const Video = () => {
  const [playing, setPlaying] = useState(false);
  return (
    <>
      <Text p={3} textAlign="center" id="about">
        <Box
          mr={1}
          style={{
            color: 'white',
            background: '#2d73bf',
            borderRadius: '3px',
            fontSize: '0.8rem',
            fontWeight: 600,
            padding: '0 0.5rem',
            display: 'inline-block',
          }}
        >
          NEW
        </Box>
        Take a tour of <span style={{ color: ' #2d73bf' }}>Salestrekker</span>
      </Text>
      <StyledVideo className="container" m="auto" my={3} flexWrap="wrap">
        <Flex width={[1, 1, 1 / 2]} alignItems="center" p={3}>
          <Box className="video_thumb">
            <ReactPlayer
              url={video}
              controls
              className="video_player"
              onPlay={() => {
                setPlaying(true);
              }}
              onPause={() => {
                setPlaying(false);
              }}
            />
            {!playing && (
              <Box width={8} height={8} className="video_button">
                <FaPlay />
              </Box>
            )}
          </Box>
        </Flex>
        <Box width={[1, 1 / 2, 1 / 4]} p={3}>
          {featureItems.map(({ title, content }) => (
            <Box className="video_feature" key={title} mb={3}>
              <Text className="video_feature_title">
                <AiFillCaretRight className="video_feature_icon" />
                {title}
              </Text>
              <Text className="video_feature_content">{content}</Text>
            </Box>
          ))}
        </Box>
        <Box width={[1, 1 / 2, 1 / 4]} p={3}>
          {featureItems2.map(({ title, content }) => (
            <Box className="video_feature" key={title} mb={3}>
              <Text className="video_feature_title">
                <AiFillCaretRight className="video_feature_icon" />
                {title}
              </Text>
              <Text className="video_feature_content">{content}</Text>
            </Box>
          ))}
        </Box>
      </StyledVideo>
    </>
  );
};
