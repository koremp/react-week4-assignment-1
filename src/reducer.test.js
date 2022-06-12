import reducer from './reducer';

import {
  changeTaskTitle,
  addTask,
  deleteTask,
} from './actions';

jest.mock('react-redux');

describe('reducer', () => {
  describe('changeTaskTitle', () => {
    it('changes task title', () => {
      const { taskTitle } = reducer({
        taskTitle: '',
      }, changeTaskTitle('NewTitle'));

      expect(taskTitle).toBe('NewTitle');
    });
  });

  describe('addTask', () => {
    function reduceAddTask(taskTitle) {
      const previousState = {
        newId: 100,
        taskTitle,
        tasks: [],
      };

      return reducer(previousState, addTask());
    }

    context('when taskTitle is not empty', () => {
      it('add task to tasks', () => {
        const { tasks } = reduceAddTask('NewTask');

        expect(tasks).toHaveLength(1);
        expect(tasks[0].id).not.toBeUndefined();
        expect(tasks[0].title).toBe('NewTask');
      });

      it('clears task title', () => {
        const { taskTitle } = reduceAddTask('NewTask');

        expect(taskTitle).toBe('');
      });
    });

    context('when taskTitle is empty', () => {
      it('doesn"t work', () => {
        const { tasks } = reduceAddTask('');

        expect(tasks).toHaveLength(0);
      });
    });
  });

  describe('deleteTask', () => {
    context('with existed taskID', () => {
      it('remove specific task from tasks', () => {
        const state = reducer({
          tasks: [
            { id: 1, title: 'task' },
          ],
        }, deleteTask(1));

        expect(state.tasks).toHaveLength(0);
      });
    });
    context('without existed taskID', () => {
      it('doesn"t work', () => {
        const state = reducer({
          tasks: [
            { id: 1, title: 'task' },
          ],
        }, deleteTask(100));

        expect(state.tasks).toHaveLength(1);
      });
    });
  });
});
