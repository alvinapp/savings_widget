import {cleanup, render} from '@testing-library/react';
import {screen} from '@testing-library/dom';

import BalanceView from 'client/pages/components/BalanceView';

afterEach(cleanup);

describe('', () => {
  test('Check if BalanceView props are being passed', () => {
    const balance = 310320;
    render(<BalanceView balance={balance} />);
    const text = screen.getByText(balance.toLocaleString());
    expect(text).toBeInTheDocument();
  });
});
