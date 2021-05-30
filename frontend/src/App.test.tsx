import { render, screen } from '@testing-library/react';
import App from './App';

const mockEnqueueSnackbar = jest.fn();
const mockCloseSnackbar = jest.fn();

jest.mock('notistack', () => {
  const actual = jest.requireActual('notistack');

  return {
    ...actual,
    useSnackbar: () => ({
      enqueueSnackbar: mockEnqueueSnackbar,
      closeSnackbar: mockCloseSnackbar,
    }),
  };
});

test('renders <App />', () => {
  render(<App />);
  const linkElement = screen.getByText(/Weather Forecast/i);
  expect(linkElement).toBeInTheDocument();
});
