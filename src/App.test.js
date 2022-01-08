import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

const setup = () => {
  const utils = render(<App />);
  const input = utils.getByRole('textbox');
  return {
    input,
    ...utils,
  };
};

describe('App', () => {
  test('input renders on load', () => {
    render(<App />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  test('progress bar renders on load', () => {
    render(<App />);
    expect(screen.getByTestId('progressBar')).toBeInTheDocument();
  });

  test('svg renders on load', () => {
    render(<App />);
    expect(screen.getByTestId('svgMap')).toBeInTheDocument();
  });

  test('clears if a correct name is entered', () => {
    const { input } = setup();
    fireEvent.change(input, { target: { value: 'France' } });
    expect(input.value).toBe('');
  });

  test('changes the color of the svg path', () => {
    const { input } = setup();
    const spainPath = screen.getByTitle('Spain');
    fireEvent.change(input, { target: { value: 'Spain' } });
    expect(spainPath.style.fill).toEqual('#FA8F02');
  });
});
