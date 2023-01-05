import {screen} from '@testing-library/dom';
import {render} from '@testing-library/react';
import React from 'react';
import {act} from 'react-dom/test-utils';

import Overview from 'client/pages/overview/index';

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve([]);
    },
  });
});

describe('Overview', () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  test('renders all accounts', () => {
    // act(() => {
    //   render(<Overview />);
    // });
  });
});

/*
const setupFetchMock = () => {
  fetchMock.get(
    '/accounts/',
    () => {
      return [
        {
          id: 1,
          title: {id: 1, name: 'Stanbic'},
          balance: 310000,
          type: 'Checking',
          color: '',
          iconBgColor: '',
          account_no: 4637990278234566,
        },
        {
          id: 2,
          title: {id: 2, name: 'M-pesa'},
          balance: 231800,
          type: 'Wallet',
          account_no: 4637990278234597,
          color: 'bg-green-600',
          iconBgColor: 'bg-green-500',
        },
        {
          id: 3,
          title: {id: 3, name: 'Stanbic'},
          balance: 310000,
          type: 'Checking',
          account_no: 4637990278234532,
          color: '',
          iconBgColor: '',
        },
      ];
    },
    {
      delay: 1000,
    }
  );

  fetchMock.get(
    '/transactions',
    () => {
      return [
        {
          id: 1,
          merchant: {id: 2, name: 'Okonkwo chama ground'},
          amount: 4000,
          category: {id: 2, name: 'Loan repayment'},
          transacted_at: Date().toString(),
        },
        {
          id: 2,
          merchant: {id: 5, name: 'Carrefour'},
          amount: 10000,
          category: {id: 2, name: 'Shoppping'},
          transacted_at: Date().toString(),
        },
        {
          id: 3,
          merchant: {id: 3, name: 'Memphis Tech'},
          amount: 100000,
          category: {id: 2, name: 'Salary'},
          transacted_at: Date().toString(),
        },
      ];
    },
    {
      delay: 1000,
    }
  );
};
*/
