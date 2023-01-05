import {cleanup} from '@testing-library/react';

import Institution from 'client/models/Institution';

afterEach(cleanup);

it('Institution ', () => {
  const institution: Institution = {
    id: 1,
    name: 'Stanbic',
  };
  expect(institution.name).toBe('Stanbic');
});
