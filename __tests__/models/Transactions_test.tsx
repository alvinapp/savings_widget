import {cleanup} from '@testing-library/react';

import Category from 'client/models/Category';
import Merchant from 'client/models/Merchant';
import Transaction from 'client/models/Transaction';

afterEach(cleanup);

it('Transactions ', () => {
  const category: Category = {
    id: 1,
    name: 'Groceries',
    emoji: '',
  };
  const merchant: Merchant = {
    id: 1,
    name: 'CarreFour',
  };
  const transaction: Transaction = {
    id: 2,
    merchant: merchant,
    transacted_at: new Date(2022, 9, 2, 2, 15, 45),
    category: category,
    amount: 12345,
    institution: {
      name: 'KCB',
    },
    type: 'debit',
  };
  expect(transaction.merchant.name).toBe('CarreFour');
  expect(transaction.category.name).toBe('Groceries');
  expect(transaction.transacted_at.toLocaleString('en-GB')).toBe(
    '02/10/2022, 02:15:45'
  );
});
