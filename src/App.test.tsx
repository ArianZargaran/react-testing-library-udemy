import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('When the App is compiled', ()=> {
  beforeEach(() => {
    // render method tests the snippet of HTML involved in the test
    render(<App />);
  });

  test('should render the App component', () => {
    // outputs the snippet of HTML involved in the test
    screen.debug();
  });

  // SEARCH TYPES:
  test('should render an input label with the text "Input"', () => {
    // Search Type by text. You can pass a String or a regex. Just remember, if you pass a text it should match completely the expected copy.
    screen.getByText(/Input/);
  });

  test('should select the input element by its role', () => {
    // Search Type by role. Searching method to retrieve elements from the page by area label.
    screen.getByRole('textbox');
    // As you see in this test we are using an implicit assertion (no expect statement is present).
    // If the implicit assertion fails, even though there's no expect, the test will fail.
    // If we were to have an explicit assertion, we can also do it:
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  test('should select a label element by its inner text', () => {
    // getByLabelText is a method to retrieve innerHTML content within Labels.
    // Similar to the getByText method, but  specifically for labels.
    screen.getByLabelText('Input:');
  });

  test('should select an input element by placeholder text', () => {
    // getByLabelText is a method to retrieve innerHTML content within Labels.
    // Similar to the getByText method, but  specifically for labels.
    screen.getByPlaceholderText('Example Text');
  });

  test('should select a label element by its inner text', () => {
    // getByLabelText is a method to retrieve innerHTML content within Labels.
    // Similar to the getByText method, but  specifically for labels.
    screen.getByLabelText('Input:');
  });

  // SEARCH VARIANTS:
  test('should not find the role "whatever" in our document', () => {
    // The main difference between getByRole and queryByRole is the test won't fail if the finding try is not successful.
    // Instead, it'd return null.
    const failingResult = screen.queryByRole('whatever');
    console.log(failingResult) // null
    expect(failingResult).toBeNull();
  });

  test('should find the role "textbox" in our document', () => {
    const passingResult = screen.queryByRole('textbox');
    console.log(passingResult) // <input id="search" placeholder="Example Text" value="" />
    expect(passingResult).not.toBeNull();
  });
});