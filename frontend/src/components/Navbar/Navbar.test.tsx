import { cleanup, render } from '@testing-library/react';
import Navbar from './Navbar';

const props = {
  title: 'Weather Forecast',
};

afterEach(cleanup);

describe('<Navbar />', () => {
  it('renders provided title', () => {
    let { getByText } = render(<Navbar {...props} />);
    getByText(props.title);
  });

  it('renders without provided title', () => {
    let { getByText } = render(<Navbar />);
    getByText(props.title);
  });

  // it('renders component', () => {
  //   let container = render(<Navbar {...props} />);
  //   expect(container).toMatchSnapshot();
  // });
});
