import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');

test('App', () => {
  useSelector.mockImplementation((selector) => selector({
    taskTitle: 'New Title',
    tasks: [
      { id: 1, title: 'aaaaa' },
      { id: 2, title: 'bbbbb' },
    ],
  }));

  const { getByText } = render((<App />));

  expect(getByText(/aaaaa/)).not.toBeNull();
  expect(getByText(/bbbbb/)).not.toBeNull();
});
