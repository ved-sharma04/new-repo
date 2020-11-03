import { render, screen } from '@testing-library/react';
import AssignmentRules from './AssignmentRules';

test('renders learn react link', () => {
  render(<AssignmentRules />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
