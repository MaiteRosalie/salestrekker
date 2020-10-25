import React from 'react';
import { Flex, Box, Text } from 'rebass';
import styled from 'styled-components';
import { IconType } from 'react-icons';
import { TiPlus } from 'react-icons/ti';

const StyledPrices = styled(Box)`
  background-color: #f6f9fb;
  border-top: 1px solid #dde4e9;
  border-bottom: 1px solid #dde4e9;
  .price {
    border-right: 1px solid #dde4e9;
    text-align: center;
  }
  .price_value {
    font-size: 2rem;
  }
  .price_type{
    margin-bottom: 1rem;
    font-size: 0.9rem;
    border-bottom: 1px solid rgb(221, 228, 233);
    padding-bottom: 1rem;
    color: color: rgb(140, 168, 188);
    color: rgb(140, 168, 188);
  }
  .price_title {
    background-color: #2d73bf;
    display: inline-block;
    border-radius: 3px;
    color: #fff;
    font-size: 0.8rem;
    font-weight: 600;
    padding: 0 0.5rem;
  }
  .price_section {
    color: #8ca8bc;
  }
  .price_section_content {
    color: #8ca8bc;
    font-weight: 300;
  }
  .price_section_icon {
    color: #446072;
    margin-top: 0.5rem;
  }
  .price_button {
    color: #658092;
    border: 1px solid #cdd6dc;
    border-radius: 30px;
    text-align: center;
    padding: 0.2rem 0.8rem;
    text-align: center;
    display: inline-block;
    font-size: 0.9rem;
    margin-top: 1rem;
  }
`;

type priceType = {
  title: string;
  price: string;
  type: string;
  Icon?: IconType;
  sections: {
    title: string;
    content: string[];
  }[];
};
const priceItems: priceType[] = [
  {
    title: 'CRM',
    price: '79.99',
    type: 'user/month (+GST)',
    sections: [
      {
        title: 'Deal tracking and reporting',
        content: [],
      },
      {
        title: 'Workflow automation',
        content: ['Dynamic templates', 'E-Mail to Deal notes', 'Merge documents'],
      },
      {
        title: 'Customer support',
        content: ['Next business day', 'Via E-Mail', 'Video tutorials and Knowledge base'],
      },
    ],
  },
  {
    title: 'MORTGAGE BROKER',
    price: '179.99',
    type: 'user/month (+GST)',
    sections: [
      {
        title: 'All CRM features',
        content: [],
      },
      {
        title: 'Broker tools',
        content: ['Home Loans', 'Asset Finance', 'Compliance documents'],
      },
      {
        title: 'Customer support',
        content: [
          'Same day, during business hours',
          'Via Live Chat and E-Mail',
          'Video tutorials and Knowledge base',
        ],
      },
    ],
  },
  {
    title: 'ENTERPRISE',
    price: 'CALL',
    type: 'for custom tailored quote',
    sections: [
      {
        title: 'All features',
        content: [],
      },
      {
        title: 'Personalised set-up',
        content: [
          'Customisation assistance',
          'Dedicated account manager',
          'Dedicated infrastructure',
        ],
      },
      {
        title: 'Customer support',
        content: [
          'Same day, 24h on business days',
          'Phone, Live Chat and E-Mail',
          'Video tutorials and Knowledge base',
        ],
      },
    ],
  },
];

export const Prices = () => {
  return (
    <>
      <Text p={3} textAlign="center" id="pricing">
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
        Loan processors pay <span style={{ color: ' #2d73bf' }}>$79.99</span> per user a month
        (+GST) on the <span style={{ color: ' #2d73bf' }}>Mortage Broker</span> plan.
      </Text>
      <StyledPrices className="prices">
        <Flex className="container" m="auto" flexWrap="wrap">
          {priceItems.map(({ title, price, type, sections }, i) => (
            <Box
              key={title}
              className="price"
              width={[1, 1 / 3, 1 / 3]}
              p={3}
              style={{ borderRightColor: i === priceItems.length - 1 ? 'transparent' : '#dde4e9' }}
            >
              <Text className="price_title">{title}</Text>
              <Text className="price_value">{price}</Text>
              <Text className="price_type">{type}</Text>
              {sections.map((section, i) => (
                <Box className="price_section" key={section.title}>
                  {i !== 0 && <TiPlus className="price_section_icon" />}
                  <Text className="price_section_title">{section.title}</Text>
                  {section.content.map((el) => (
                    <Text className="price_section_content">{el}</Text>
                  ))}
                </Box>
              ))}
              <Flex as="a" href="#" className="price_button">
                Sign Up
              </Flex>
            </Box>
          ))}
        </Flex>
      </StyledPrices>
    </>
  );
};
