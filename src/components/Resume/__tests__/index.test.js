// __tests__/Resume.test.js
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Resume from '..';

afterEach(cleanup);

describe('Resume component', () => {
  it('renders', () => {
    render(<Resume />);
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<Resume />);

    expect(asFragment()).toMatchSnapshot();
  });
})
