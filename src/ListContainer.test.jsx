import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';
import ListContainer from './ListContainer';

jest.mock('react-redux');

test('ListContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    tasks: [
      { id: 1, title: 'aaaaa' },
      { id: 2, title: 'bbbbb' },
    ],
  }));

  const { getByText } = render((
    <ListContainer />
  ));

  expect(getByText(/aaaaa/)).not.toBeNull();
});
