import {cleanup, render} from '@testing-library/react';
import {screen} from '@testing-library/dom';

import FilterButton from 'client/pages/components/FilterButton';

afterEach(cleanup);

describe('', () => {
  test('Check if FilterButton props are being passed', () => {
    const now = new Date();
    const props = {
      label: 'Stanbic',
    };
    render(<FilterButton {...props} />);
    const merchant = screen.getByText('Stanbic');
    expect(merchant).toBeInTheDocument();
  });
});
