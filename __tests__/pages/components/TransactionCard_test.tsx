import {cleanup, render} from '@testing-library/react';
import {screen} from '@testing-library/dom';

import TransactionCard from 'client/pages/components/TransactionCard';
afterEach(cleanup);

describe('', () => {
  test('Check if TransactionCard props are being passed', () => {
    const now = new Date();
    const props = {
      id: 3,
      merchant: {id: 3, name: 'Memphis Tech'},
      amount: 100000,
      category: {id: 2, name: 'Salary', emoji: ''},
      transacted_at: now,
      institution: {
        name: 'KCB',
      },
      type: 'debit',
    };
    render(<TransactionCard {...props} />);
    const merchant = screen.getByText('Memphis Tech');
    expect(merchant).toBeInTheDocument();
  });
});
