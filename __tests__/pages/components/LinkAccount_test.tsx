import {cleanup, render} from '@testing-library/react';
import {screen} from '@testing-library/dom';

import LinkAccountCard from 'client/pages/components/LinkAccountCard';

afterEach(cleanup);

describe('', () => {
  test('Check if LinkAccountCard props are being passed', () => {
    const props = {
      title: 'Link other accounts',
      subTitle: 'Bank or mobile wallet',
    };
    render(<LinkAccountCard {...props} />);
    const text = screen.getByText('Link other accounts');
    expect(text).toBeInTheDocument();
  });
});
