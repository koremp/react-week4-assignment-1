import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';
import App from './App';

jest.mock('react-redux');

test('App', () => {
  const tasks = [
    { id: 1, title: 'aaaaa' },
    { id: 2, title: 'bbbbb' },
  ];

  useSelector.mockImplementation((selector) => selector({
    tasks,
  }));

  const { getByText } = render((
    <App />
  ));

  expect(getByText(/aaaaa/)).not.toBeNull();
});
