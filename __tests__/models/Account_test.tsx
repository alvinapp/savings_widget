import {cleanup} from '@testing-library/react';

import Account from 'client/models/Account';
import Institution from 'client/models/Institution';

afterEach(cleanup);

it('Account ', () => {
  const institution: Institution = {
    id: 1,
    name: 'Stanbic',
  };

  const account: Account = {
    account_number: '12345678',
    account_id: '6321d375bed8a715dad01fb9',
    type: 'Checking',
    balance: 10000,
    name: institution.name,
    is_linked: true,
  };
  expect(account.name).toBe('Stanbic');
});
