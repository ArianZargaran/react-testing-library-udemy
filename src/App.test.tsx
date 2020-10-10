import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('When the App is compiled', ()=> {
  test('should render the App component', () => {
    // render method tests the snipet of HTML involved in the test
    render(
      <App />
    );
    // outputs the snipet of HTML involved in the test
    screen.debug();
  });

  test('should render an input label with the text "Input"', () => {
    render(<App />);
    screen.getByText(/Input/);
  });
});