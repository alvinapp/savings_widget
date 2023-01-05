import {cleanup} from '@testing-library/react';

import Category from 'client/models/Category';

afterEach(cleanup);

it('Category ', () => {
  const category: Category = {
    id: 1,
    name: 'Groceries',
    emoji: '',
  };
  expect(category.name).toBe('Groceries');
});
