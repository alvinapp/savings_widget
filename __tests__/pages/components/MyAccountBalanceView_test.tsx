import {cleanup, render} from '@testing-library/react';
import {screen} from '@testing-library/dom';

import MyAccountBalanceView from 'client/pages/components/MyAccountBalanceView';

afterEach(cleanup);

describe('', () => {
  test('Check if MyAccountBalanceView props are being passed', () => {
    const balance = 310320;
    render(<MyAccountBalanceView balance={balance} />);
    const text = screen.getByText(balance.toLocaleString());
    expect(text).toBeInTheDocument();
  });
});
