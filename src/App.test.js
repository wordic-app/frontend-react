import { render, screen } from '@testing-library/react';
import App from 'components/pages/App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/button/i);
  expect(linkElement).toBeInTheDocument();
});
