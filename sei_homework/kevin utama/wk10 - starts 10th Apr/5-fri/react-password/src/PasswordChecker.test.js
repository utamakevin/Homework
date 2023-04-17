import { render, screen } from '@testing-library/react';
import App from './App';
import PasswordChecker from './PasswordChecker';

// test.skip('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('1 point for lowercase', () => {
  // render(<App />)
  render(<PasswordChecker />)
  expect( checkPass('pudding') ).toEqual({ 
    score: 1,
    hasLowerCase: true, 
    hasUpperCase: false,
    hasNumber: false,
    hasNonAlphaNumeric: false,
    isOver8Char: false,
    isOver12Char: false
  })
}) 
