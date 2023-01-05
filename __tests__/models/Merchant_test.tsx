import {cleanup} from '@testing-library/react';

import Merchant from 'client/models/Merchant';

afterEach(cleanup);

it('Category ', () => {
  const merchant: Merchant = {
    id: 1,
    name: 'CarreFour',
  };
  expect(merchant.name).toBe('CarreFour');
});
