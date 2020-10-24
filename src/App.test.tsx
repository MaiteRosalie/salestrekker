import React, { ReactNode } from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  let wrapper: ReactNode = null;

  beforeEach(() => {
    wrapper = render(<App />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('Renders Seamlessly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
