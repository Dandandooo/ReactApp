import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom'
import {BrowserRouter} from "react-router-dom";

test('renders welcome screen', () => {
  render(<BrowserRouter><App /></BrowserRouter>);
  const linkElement = screen.getByText(/Welcome/i);
  expect(linkElement).toBeInTheDocument();
});
